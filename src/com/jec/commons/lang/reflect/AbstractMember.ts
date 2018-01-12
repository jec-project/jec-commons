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

import {Member} from "./Member";

/**
 * Base implementation of a <code>Member</code>.
 */
export abstract class AbstractMember implements Member {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractMember</code> instance. 
   * 
   * @param {string} name simple name of the underlying member or constructor
   *                      represented by this <code>Member</code>.
   * @param {number} type the type of the underlying member represented by this
   *                      <code>Member</code>.
   * @param {any} declaringClass the object representing the class that declares
   *                             the member or constructor represented by this
   *                             <code>Member</code>.
   */
  constructor(name:string, type:number, declaringClass:any) {
    this.initObj(name, type, declaringClass);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Protected properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The simple name of the underlying member or constructor represented by this
   * <code>Member</code>.
   */
  private _name:string = null;

  /**
   * The type of the underlying member represented by this <code>Member</code>.
   */
  private _type:number = null;

  /**
   * The type of the underlying member represented by this <code>Member</code>.
   */
  private _declaringClass:any = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {string} name simple name of the underlying member or constructor
   *                      represented by this <code>Member</code>.
   * @param {number} type the type of the underlying member represented by this
   *                      <code>Member</code>.
   * @param {any} declaringClass the object representing the class that declares
   *                             the member or constructor represented by this
   *                             <code>Member</code>.
   */
  private initObj(name:string, type:number, declaringClass:any):void {
    this._name = name;
    this._type = type;
    this._declaringClass = declaringClass;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getName():string {
    return this._name;
  }

  /**
   * @inheritDoc
   */
  public getType():number {
    return this._type;
  }
  
  /**
   * @inheritDoc
   */
  public getDeclaringClass():any {
    return this._declaringClass;
  }
};
