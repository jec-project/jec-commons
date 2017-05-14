//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import * as fs from "fs";
import {DecoratorPropertiesBuilder} from "./DecoratorPropertiesBuilder";
import {ImportRef} from "./ImportRef";
import {ImportRefParser} from "./ImportRefParser";
import {DecoratorProperties} from "../DecoratorProperties";

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
   * The pattern used to detect decorators in a JavaScript file.
   */
  private static readonly JS_PATTERN:RegExp =
                   /__decorate\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\);/gm;

  /**
   * The pattern used to detect decorators in a TypeScript file.
   */
  private static readonly TS_PATTERN:RegExp =
    /^\s*@[a-zA-Z]+([A-z0-9]+)?\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/gm;

  /**
   * The reference to the <code>ImportRefParser</code> instance used by this
   * decorator parser.
   */
  private static readonly PARSER:ImportRefParser = new ImportRefParser();

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
  public static findDecorators(file:string):DecoratorProperties[] {
    let builder:DecoratorPropertiesBuilder = new DecoratorPropertiesBuilder();
    let result:DecoratorProperties[] = new Array<DecoratorProperties>();
    let found:RegExpMatchArray = null;
    let decoratorString:string = null;
    let props:DecoratorProperties = null;
    let imports:ImportRef[] = DecoratorParser.PARSER.getImports(file);
    while(found = DecoratorParser.JS_PATTERN.exec(file)){
      decoratorString = found[0].trim();
      props = builder.build(decoratorString, file, imports);
      result.push(props);
    }
    return result;
  }
}
