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

import {FileProperties} from "../FileProperties";
import {JecStringsEnum} from "../../../util/JecStringsEnum";
import {UrlStringsEnum} from "../../../util/UrlStringsEnum";

/**
 * A helper class that concatenate statistics about all files in a directory.
 */
export class PathStats {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>PathStats</code> instance.
   * 
   * @param {string} path the path to the directory for which to concatenate
   *                      stats.
   */
  constructor(path:string) {
    this.initObj(path);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A reference to the path to the directory for which to concatenate stats.
   */
  private _path:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {string} path the path to the directory for which to concatenate
   *                      stats.
   */
  private initObj(path:string) {
    this._path = path;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The number of directories in the specified path.
   */
  public directoriesNum:number = 0;

  /**
   * The number of files in the specified path.
   */
  public filesNum:number = 0;
  
  /**
   * The number of files to be processed in the specified path.
   */
  public processedFilesNum:number = 0;
    
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the path to the directory for which to concatenate stats.
   * 
   * @return {string} the path to the directory for which to concatenate stats.
   */
  public getPath():string {
    return this._path;
  }
};
