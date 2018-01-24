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

import {GuidGenerator} from "../GuidGenerator";
import {SingletonError} from "../../exceptions/SingletonError";
import {GuidGeneratorBase} from "./GuidGeneratorBase";
import {Singleton} from "../../lang/Singleton";

/**
 * A singleton implementation of the <code>GuidGenerator</code> interface that
 * proxifies a the default <code>GuidGenerator</code> object. 
 */
export class GlobalGuidGenerator implements GuidGenerator, Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlobalGuidGenerator</code> instance.
   */
  constructor() {
    if(GlobalGuidGenerator._locked || GlobalGuidGenerator.INSTANCE) {
      throw new SingletonError(GlobalGuidGenerator);
    }
    GlobalGuidGenerator._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>GlobalGuidGenerator</code> singleton instance reference.
   */
  private static INSTANCE:GlobalGuidGenerator = null;

  /**
   * Prevents <code>GlobalGuidGenerator</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>GlobalGuidGenerator</code> singleton.
   *
   * @return {GlobalGuidGenerator} a reference to the 
   *                               <code>GlobalGuidGenerator<code> singleton.
   */
  public static getInstance():GlobalGuidGenerator{
    if(GlobalGuidGenerator.INSTANCE === null) {
      GlobalGuidGenerator._locked = false;
      GlobalGuidGenerator.INSTANCE = new GlobalGuidGenerator();
    }
    return GlobalGuidGenerator.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GUID generator for this proxy.
   */
  private _generator:GuidGenerator = null;

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
    this._generator = new GuidGeneratorBase();
    this._id = this._generator.generate();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public generate():string {
    return this._generator.generate();
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}