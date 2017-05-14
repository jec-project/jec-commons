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

import {ImportRef} from "./ImportRef";

/**
 * A utility class that is used by <code>DecoratorParser</code> objects to
 * detect decorator importss in a string source file.
 */
export class ImportRefParser {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ImportRefParser</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * The pattern used to detect require imports in a JavaScript class file.
   */
  private static readonly REQUIRE_PATTERN:RegExp =
    /^const\s(\w)*\s=\srequire\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\);/gm;

  /**
   * The reference to the equal character (<code>=</code>).
   */
  private static readonly EQUAL:string = "=";

  /**
   * The reference to the double quotes character (<code>"</code>).
   */
  private static readonly DBL_QUOTES:string = '"';

  //////////////////////////////////////////////////////////////////////////////
  //   // Public methods
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * Parses the specified file and returns the list of imports it contains.
   * 
   * @param {string} file the file to parse.
   * @return {Array<Object>} the list of imports for the specified file.
   */
  public getImports(file:string):ImportRef[] {
    let imports:ImportRef[] = new Array<ImportRef>();
    let found:RegExpMatchArray = null;
    let importString:string = null;
    let importRef:ImportRef = null;
    let equalId:number = -1;
    let quotesId:number = -1;
    while(found = ImportRefParser.REQUIRE_PATTERN.exec(file)){
      importString = found[0].trim();
      equalId = importString.indexOf(ImportRefParser.EQUAL);
      quotesId = importString.indexOf(ImportRefParser.DBL_QUOTES);
      importRef = new ImportRef();
      importRef.ref = importString.substring(6, equalId - 1);
      importRef.classPath =
                  importString.substring(quotesId + 1, importString.length - 3);
      importRef.content = importString;
      imports.push(importRef);
    }
    return imports;
  }
}
