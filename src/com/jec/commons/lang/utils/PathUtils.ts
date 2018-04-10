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

import {SingletonError} from "../../exceptions/SingletonError";
import {Singleton} from "../../lang/Singleton";
import {GlobalGuidGenerator} from "./GlobalGuidGenerator";
import {UrlStringsEnum} from "../../util/UrlStringsEnum";
import {JecStringsEnum} from "../../util/JecStringsEnum";
import * as nodePath from "path";

/**
 * A singleton that provides utilities for working with file paths. 
 */
export class PathUtils implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>PathUtils</code> instance.
   */
  constructor() {
    if(PathUtils._locked || PathUtils.INSTANCE) {
      throw new SingletonError(PathUtils);
    }
    PathUtils._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>PathUtils</code> singleton instance reference.
   */
  private static INSTANCE:PathUtils = null;

  /**
   * Prevents <code>PathUtils</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>PathUtils</code> singleton.
   *
   * @return {PathUtils} a reference to the <code>PathUtils<code> singleton.
   */
  public static getInstance():PathUtils{
    if(PathUtils.INSTANCE === null) {
      PathUtils._locked = false;
      PathUtils.INSTANCE = new PathUtils();
    }
    return PathUtils.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GUID for this singleton.
   */
  private _id:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._id = GlobalGuidGenerator.getInstance().generate();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Replaces all double back slashes (<code>\\</code>) from the specified path
   * by single back slashes (<code>\</code>).
   * 
   * @param {string} path The path to sanityze.
   * @return {string} the path after sanitization.
   */
  public buildFilePath(path:string, fileName:string):string {
    const filePath:string = nodePath.join(
      path, fileName + UrlStringsEnum.DOT + JecStringsEnum.JS_EXTENSION
    );
    return filePath;
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}