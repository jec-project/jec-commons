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

import {DecoratorProperties} from "../DecoratorProperties";
import {BasicDecoratorProperties} from "../impl/BasicDecoratorProperties";
import {FileProperties} from "../FileProperties";
import {UrlStringsEnum} from "../../../util/UrlStringsEnum";
import {ImportRef} from "./ImportRef";

/**
 * A utility class that builds <code>DecoratorProperties</code> instances from 
 * decorator strings extracted from class files.
 */
export class DecoratorPropertiesBuilder {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>DecoratorPropertiesBuilder</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The reference to the open parenthesis character (<code>(</code>).
   */
  private static readonly OPEN_PARENTHESIS:string = "(";

  /**
   * The reference to the newline character (<code>\n</code>).
   */
  private static readonly NEW_LINE:string = "\n";
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Builds and returns a new <code>DecoratorProperties</code> instance from the
   * specified parameters.
   * 
   * @param {string} decorator the decorator string to parse.
   * @param {string} file the class file string from which is extracted the 
   *                      reference to the decorator string to parse.
   * @param {Array<ImportRef>} refList the list of string that represents the 
   *                                   class imports extracted from the
   *                                   specified <code>file</code>.
   * @return {DecoratorProperties} a new <code>DecoratorProperties</code>
   *                               instance.
   */
  public build(decorator:string, file:string,
                                 refList:Array<ImportRef>):DecoratorProperties {
    let result:DecoratorProperties = new BasicDecoratorProperties();
    let dotPos:number = decorator.indexOf(UrlStringsEnum.DOT);
    let temp:string = decorator.substring(dotPos + 1);
    let cursor:number =
                      temp.indexOf(DecoratorPropertiesBuilder.OPEN_PARENTHESIS);
    let classRef:string = null;
    let importRef:ImportRef = null;
    let classPath:string = null;
    let decoratorName:string = temp.substring(0, cursor);
    result.name = decoratorName;
    result.value = decorator;
    cursor = decorator.indexOf(DecoratorPropertiesBuilder.NEW_LINE);
    classRef = decorator.substring(cursor + 1, dotPos).trim();
    cursor = refList.length;
    while(cursor--){
      importRef = refList[cursor];
      if(importRef.ref === classRef) {
        result.classPath = importRef.classPath;
        break;
      }
    }
    return result;
  }
}
