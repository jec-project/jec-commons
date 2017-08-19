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

import {FilePreProcessor} from "./FilePreProcessor";

/**
 * The <code>SourceFileInspector</code> interface defines the default set of 
 * APIs that  must be implemented for creating engines that are used for 
 * preprocessing source files before they are loaded within a JEC application.
 */
export interface SourceFileInspector {

  /**
   * Sets the object that must be notified each time the file inspector complete
   * a file inspection process.
   * 
   * @param {any} watcher the watcher object for this file inspector.
   */
  setWatcher(watcher:any):void;

  /**
   * Returns the watcher object associated with this file inspector.
   * 
   * @return {any} the watcher object for this file inspector.
   */
  getWatcher():any;

  /**
   * Adds a <code>FilePreProcessor</code> processor instance to this file
   * inspector.
   * 
   * @param {FilePreProcessor} file the processor to add.
   */
  addProcessor(processor:FilePreProcessor):void;

  /**
   * Removes the specified <code>FilePreProcessor</code> processor instance from
   * this file inspector and returns the result of the operation.
   * 
   * @param {FilePreProcessor} file the processor to remove.
   * @return {boolean} <code>true</code> whether the processor has been removed;
   *                   <code>false</code> otherwhise.
   */
  removeProcessor(processor:FilePreProcessor):boolean;

  /**
   * Adds a new source path to this file inspector.
   * 
   * @param {string} path the source path to add.
   */
  addSourcePath(path:string):void;

  /**
   * Inspects the specified source paths for this file inspector.
   */
  inspect(inspectMode:number):void;
}
