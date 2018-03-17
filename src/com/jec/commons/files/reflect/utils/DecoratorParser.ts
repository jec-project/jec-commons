//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {DecoratorPropertiesBuilder} from "./DecoratorPropertiesBuilder";
import {ImportRef} from "./ImportRef";
import {ImportRefParser} from "./ImportRefParser";
import {DecoratorProperties} from "../DecoratorProperties";
import {DecoratorType} from "./DecoratorType";
import {UrlStringsEnum} from "../../../util/UrlStringsEnum";

/**
 * A utility class that is used by <code>FilePreProcessor</code> objects to
 * detect decorators in a string source file.
 */
export class DecoratorParser {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>DecoratorParser</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The pattern used to detect member decorators in a JavaScript file.
   */
  private static readonly MEMBER_PATTERN:RegExp =
                   /__decorate\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\);/gm;
  
  /**
   * The pattern used to detect field decorators in a JavaScript file.
   */
  private static readonly FIELD_PATTERN:RegExp = /__param\(\d, (\w*).(\w*)/gm;

  /**
   * The reference to the open parenthesis character (<code>(</code>).
   */
  private static readonly OPEN_PARENTHESIS:string = "(";

  /**
   * The reference to the newline character (<code>\n</code>).
   */
  private static readonly NEW_LINE:string = "\n";
  
  /**
   * The reference to the metadata parameters string (<code>__param</code>).
   */
  private static readonly PARAM:string = "__param";

  /**
   * The reference to the <code>ImportRefParser</code> instance used by this
   * decorator parser.
   */
  private static readonly PARSER:ImportRefParser = new ImportRefParser();

  /**
   * The reference to the <code>DecoratorPropertiesBuilder</code> instance used
   * by this decorator parser.
   */
  private static readonly BUILDER:DecoratorPropertiesBuilder =
                                               new DecoratorPropertiesBuilder();

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Returs the class path into the import refs for the specified TypeScript
   * class reference.
   * 
   * @param {string} classRef the TypeScript class reference for which to return
   *                          the valid class path.
   * @param {Array<ImportRef>} refs an array that contains all files imports for
   *                                the current file.
   * @return {string} the class path for the specified parameters.
   */
  public static getClassPath(classRef:string, refs:ImportRef[]):string {
    let len:number = refs.length;
    let importRef:ImportRef = null;
    let classPath:string = null;
    while(len--){
      importRef = refs[len];
      if(importRef.ref === classRef) {
        classPath = importRef.classPath;
        break;
      }
    }
    return classPath;
  }

  /**
   * A visitor function that extracts field decorators from the specified file
   * and adds them to the <code>result</code> decorators list.
   * 
   * @param {Array<DecoratorProperties>} result the list of decorators to
   *                                            complete.
   * @param {Array<ImportRef>} refs an array that contains all files imports for
   *                                the specified file.
   * @param {string} file the file to parse.
   */
  public static extractFields(result:Array<DecoratorProperties>,
                                      refs:Array<ImportRef>, file:string):void {
    let found:RegExpMatchArray = null;
    let decoratorString:string = null;
    let props:DecoratorProperties = null;
    let classPath:string = null;
    while(found = DecoratorParser.FIELD_PATTERN.exec(file)){
      decoratorString = found[0].trim();
      classPath = this.getClassPath(found[1], refs);
      props = DecoratorParser.BUILDER.build(
        found[2], decoratorString, classPath, DecoratorType.FIELD
      );
      result.push(props);
    }
  }
  
  /**
   * A visitor function that extracts member decorators from the specified file
   * and adds them to the <code>result</code> decorators list.
   * 
   * @param {Array<DecoratorProperties>} result the list of decorators to
   *                                            complete.
   * @param {Array<ImportRef>} refs an array that contains all files imports for
   *                                the specified file.
   * @param {string} file the file to parse.
   */
  public static extractMembers(result:Array<DecoratorProperties>,
                               refs:Array<ImportRef>, file:string):void {
    let found:RegExpMatchArray = null;
    let decoratorString:string = null;
    let props:DecoratorProperties = null;
    let dotPos:number = -1;
    let cursor:number = -1;
    let stringBuffer:string = null;
    let decoratorName:string = null;
    let classPath:string = null;
    while(found = DecoratorParser.MEMBER_PATTERN.exec(file)){
      decoratorString = found[0].trim();
      dotPos = decoratorString.indexOf(UrlStringsEnum.DOT);
      stringBuffer = decoratorString.substring(dotPos + 1);
      cursor = stringBuffer.indexOf(DecoratorParser.OPEN_PARENTHESIS);
      decoratorName = stringBuffer.substring(0, cursor);
      cursor = decoratorString.indexOf(DecoratorParser.PARAM);
      if(cursor === -1 || cursor < decoratorString.indexOf(decoratorName)) {
        cursor = decoratorString.indexOf(DecoratorParser.NEW_LINE);
        classPath = this.getClassPath(
          decoratorString.substring(cursor + 1, dotPos).trim(),
          refs
        );
        props = DecoratorParser.BUILDER.build(
          decoratorName, decoratorString, classPath, DecoratorType.MEMBER
        );
        result.push(props);
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Parses the specified file and returns the list of decorators it contains.
   * 
   * @param {string} file the file to parse.
   * @return {Array<DecoratorProperties>} the list of decorators for the
   *                                      specified file.
   */
  public static findDecorators(file:string):Array<DecoratorProperties> {
    let result:Array<DecoratorProperties> = new Array<DecoratorProperties>();
    const imports:Array<ImportRef> = DecoratorParser.PARSER.getImports(file);
    this.extractMembers(result, imports, file);
    this.extractFields(result, imports, file);
    return result;
  }
}
