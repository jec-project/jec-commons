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

/**
 * The <code>Parameter</code> class reflects identifying information about
 * method parameters. 
 */
export class Parameter {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>Parameter</code> instance.
   * 
   * @param {string} name the simple name of the underlying parameter
   *                      represented by this <code>Parameter</code> instance.
   */
  constructor(name:string) {
    this.initObj(name);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The simple name of the underlying parameter represented by this
   * <code>Parameter</code> instance.
   */
  private _name:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {string} name the simple name of the underlying parameter
   *                      represented by this <code>Parameter</code> instance.
   */
  private initObj(name:string):void {
    this._name = name;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the simple name of the underlying parameter represented by this
   * <code>Parameter</code> instance.
   */
  public getName():string {
    return this._name;
  }
}