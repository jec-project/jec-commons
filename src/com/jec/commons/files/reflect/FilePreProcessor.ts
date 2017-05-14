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

import {FileProperties} from "./FileProperties";

/**
 * The <code>FilePreProcessor<code> interface defines the default set of APIs 
 * that must be implemented for preprocessing source files before they are 
 * loaded within a JEC application.
 *
 * @interface FilePreProcessor
 */
export interface FilePreProcessor {

  /**
   * Called when the file preprocessing for the specified source path starts.
   * 
   * @param {any} watcher the object that must be notified when process starts.  
   * @param {string} sourcePath the directory path where the file preprocessing
   *                            will be performed.
   */
  processStart(watcher:any, sourcePath:string);

  /**
   * Processes the specified file.
   * 
   * @param {FileProperties} file the properties of a source file for the
   *                              specified domain.
   * @param {any} watcher the object that must be notified when file is loaded.                                
   */
  process(file:FileProperties, watcher:any):void;

  /**
   * Called when the file preprocessing for the specified source path is
   * complete.
   * 
   * @param {any} watcher the object that must be notified when process is over.  
   * @param {string} sourcePath the directory path where the file preprocessing
   *                            has been performed.
   */
  processComplete(watcher:any, sourcePath:string):void;
}
