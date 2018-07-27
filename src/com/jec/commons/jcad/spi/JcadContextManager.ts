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

import {JcadContextError} from "../exceptions/JcadContextError";
import {SingletonError} from "../../exceptions/SingletonError";
import {Singleton} from "../../lang/Singleton";
import {GlobalGuidGenerator} from "../../lang/utils/GlobalGuidGenerator";
import {JcadContext} from "../JcadContext";

/**
 * This singleton contains methods for managing context objects in the
 * decorators connectors service.
 */
export class JcadContextManager implements Singleton {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JcadContextManager</code> instance.
   */
  constructor() {
    if(JcadContextManager._locked || global[JcadContextManager.GLOBAL_REF]) {
      throw new SingletonError(JcadContextManager);
    }
    JcadContextManager._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Prevents <code>JcadContextManager</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * The reference used to create the singleton over the global scope.
   */
  private static readonly GLOBAL_REF:string = "__JcadContextManager__";

  /**
   * Returns a reference to the <code>JcadContextManager</code> singleton.
   *
   * @return {JcadContextManager} a reference to the 
   *                              <code>JcadContextManager<code> singleton.
   */
  public static getInstance():JcadContextManager{
    if(global[JcadContextManager.GLOBAL_REF] === undefined) {
      JcadContextManager._locked = false;
      const ctx:JcadContextManager = new JcadContextManager();
      Object.defineProperty(
        global,
        JcadContextManager.GLOBAL_REF,
        {
          value: ctx,
          writable: false,
          enumerable: false,
          configurable: false
        }
      )
    }
    return global[JcadContextManager.GLOBAL_REF];
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The map used to store all Jcad contexts in this manager.
   */
  private _jcadContextMap:Map<string, JcadContext> = null;

  /**
   * The Globally Unique Identifier for this singleton.
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
    this._jcadContextMap = new Map<string, JcadContext>();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the <code>JcadContext</code> instance registered in this manager 
   * with the specified reference.
   * 
   * @param {string} jcadReference the reference to the context fo find.
   * @return {JcadContext} the context with the specified reference.
   */
  public getContext(jcadReference:string):JcadContext {
    return this._jcadContextMap.get(jcadReference);
  }
  
  /**
   * Adds the specified context to this context manager.
   * 
   * @param {string} jcadReference the reference to the context to add.
   * @param {JcadContext} context the context to add to this singleton.
   */
  public addContext(jcadReference:string, context:JcadContext):void {
    if(this._jcadContextMap.has(jcadReference)) {
      throw new JcadContextError(
        "A JCAD context with reference '" + jcadReference + "' already exists."
      );
    }
    this._jcadContextMap.set(jcadReference, context);
  }

  /**
   * Returns a boolean value that indicates whether the specified context is
   * registred in this context manager (<code>true</code>), or not
   * (<code>false</code>).
   * 
   * @param {string} jcadReference the reference to the context to check.
   * @param {boolean} <code>true</code> whether the specified context is
   *                  registred in this context manager; <code>false</code>
   *                  otherwhise.
   */
  public hasContext(jcadReference:string):boolean {
    return this._jcadContextMap.has(jcadReference);
  }

  /**
   * Removes the <code>JcadContext</code> instance registered in this manager 
   * with the specified reference.
   * 
   * @param {string} jcadReference the reference to the context fo remove.
   * @return {JcadContext} the context removed from this manager.
   */
  public removeContext(jcadReference:string):JcadContext {
    const context:JcadContext = this._jcadContextMap.get(jcadReference);
    this._jcadContextMap.delete(jcadReference);
    return context;
  }
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}