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

import {ClassLoader} from "../ClassLoader";
import {Singleton} from "../Singleton";
import {SingletonError} from "../../exceptions/SingletonError";
import {DefaultClassLoader} from "./DefaultClassLoader";
import {GuidGeneratorBase} from "./GuidGeneratorBase";
import {GuidGenerator} from "../GuidGenerator";

/**
 * A singleton implementation of the <code>ClassLoader</code> interface that
 * proxifies a the default <code>ClassLoader</code> object. 
 */
export class GlobalClassLoader implements ClassLoader, Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlobalClassLoader</code> instance.
   */
  constructor() {
    if(GlobalClassLoader._locked || GlobalClassLoader.INSTANCE) {
      throw new SingletonError(GlobalClassLoader);
    }
    GlobalClassLoader._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>GlobalClassLoader</code> singleton instance reference.
   */
  private static INSTANCE:GlobalClassLoader = null;

  /**
   * Prevents <code>GlobalClassLoader</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>GlobalClassLoader</code> singleton.
   *
   * @return {GlobalClassLoader} a reference to the 
   *                             <code>GlobalClassLoader<code> singleton.
   */
  public static getInstance():GlobalClassLoader{
    if(GlobalClassLoader.INSTANCE === null) {
      GlobalClassLoader._locked = false;
      GlobalClassLoader.INSTANCE = new GlobalClassLoader();
    }
    return GlobalClassLoader.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The class loader for this proxy.
   */
  private _loader:ClassLoader = null;

  /**
   * The GUID for this proxy.
   */
  private _id:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    let gen:GuidGenerator = new GuidGeneratorBase();
    this._id = gen.generate();
    this._loader = new DefaultClassLoader();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public loadClass(path:string):any {
    return this._loader.loadClass(path);
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}