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

import {JsonLoaderError} from "./exceptions/JsonLoaderError";
import {EncodingFormat} from "./utils/EncodingFormat";

/**
 * The <code>JsonLoader</code> interface defines the basic set of APIs you must
 * implement to create helper classes that load JSON files.
 */
export interface JsonLoader {

  ////////////////////////////////////////////////////////////////////////////
  // Public properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * The encoding format used by this object to parse JSON files.
   */
  encodingFormat:EncodingFormat;

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
  loadSync(path:string):any;
  
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
  load(path:string, success:(data:any)=>void,
                                        error:(err:JsonLoaderError)=>void):void;
};
