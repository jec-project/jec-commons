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
import {GlobalGuidGenerator} from "../../lang/utils/GlobalGuidGenerator";

/**
 * This singleton contains methods for accessing to a global context used by JEC
 * implementations during class loading processes.
 */
export class ClassLoaderContext implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ClassLoaderContext</code> instance.
   */
  constructor() {
    if(ClassLoaderContext._locked || global[ClassLoaderContext.GLOBAL_REF]) {
      throw new SingletonError(ClassLoaderContext);
    }
    ClassLoaderContext._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Prevents <code>ClassLoaderContext</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * The reference used to create the singleton over the global scope.
   */
  private static readonly GLOBAL_REF:string = "__ClassLoaderContext__";

  /**
   * Returns a reference to the <code>ClassLoaderContext</code> singleton.
   *
   * @return {ClassLoaderContext} a reference to the
   *                              <code>ClassLoaderContext<code> singleton.
   */
  public static getInstance():ClassLoaderContext{
    if(global[ClassLoaderContext.GLOBAL_REF] === undefined) {
      ClassLoaderContext._locked = false;
      const ctx:ClassLoaderContext = new ClassLoaderContext();
      Object.defineProperty(
        global,
        ClassLoaderContext.GLOBAL_REF,
        {
          value: ctx,
          writable: false,
          enumerable: false,
          configurable: false
        }
      )
    }
    return global[ClassLoaderContext.GLOBAL_REF];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The Globally Unique Identifier for this singleton.
   */
  private _id:string = null;

  /**
   * The path of the class currently loaded.
   */
  private _path:string = null;

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
   * Sets the path for the class currently loaded.
   * 
   * @param {string} path the path for the class currently loaded.
   */
  public setPath(path:string):void {
    this._path = path;
  }
  
  /**
   * Gets the path of the class currently loaded.
   * 
   * @return {string} the path of the class currently loaded.
   */
  public getPath():string {
    return this._path;
  }
  

  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}