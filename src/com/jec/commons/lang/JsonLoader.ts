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
import {EncodingFormat} from "./EncodingFormat";
import {JsonLoaderError} from "./JsonLoaderError";

/**
 * A utility class for loading JSON files.
 */
export class JsonLoader {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JsonLoader</code> instance.
   */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // Public properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * The encoding format used by this object to parse JSON files. Valid values
   * are constants of the <code>EncodingFormat</code> class.
   */
  public encodingFormat:string = EncodingFormat.UTF8;

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Loads the specified file synchronously and returns the JSON object parsed
   * from this file.
   *
   * @param {string} path the path to the file to load.
   * @return {any} the JSON object parsed from the loaded file.
   */
  public loadSync(path:string):any {
    let loadedString:string = null;
    let json:any = null;
    try {
      loadedString = fs.readFileSync(path, this.encodingFormat);
      json = JSON.parse(loadedString);
    } catch(e) {
      throw new JsonLoaderError(e.toString());
    }
    return json;
  }
  
  /**
   * Loads the specified JSON file asynchronously.
   *
   * @param {string} path the path to the file to load.
   * @param {Function} success the callback method called in case of file
   *                           loading success. This method takes the loaded
   *                           file reference as parameter.
   * @param {Function} error the callback method called in case of file
   *                           loading error. This method takes the error
   *                           reference as parameter.
   */
  public load(path:string, success:(data:any)=>void,
                                       error:(err:JsonLoaderError)=>void):void {
    let json:Object = null;
    fs.readFile(path, (err:Error, data:Buffer)=> {
      if(err) error(new JsonLoaderError(err.toString()));
      else {
        try {
          json = JSON.parse(data.toString(this.encodingFormat));
          success(json);
        } catch(e) {
          error(new JsonLoaderError(e.toString()));
        }
      }
    });
  }
};
