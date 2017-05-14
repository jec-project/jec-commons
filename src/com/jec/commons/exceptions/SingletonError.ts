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

/**
 * The <code>SingletonError</code> class represents an error thrown because of 
 * illegal access to a singleton constructor.
 */
export class SingletonError extends Error {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>SingletonError</code> instance.
   * 
   * @param {any} classRef the class reference to the singleton that throws the
   *                       error.
   */
  constructor(classRef:any) {
    super(
      `You cannot create a '${classRef.name}' instance, use getInstance() instead.`
    );
    this.initObj(classRef);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The class reference to the singleton that throws this error.
   */
  private _classRef:any = null;
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialises this object. This method is called by the constructor function.
   * 
   * @param {any} classRef the class reference to the singleton that throws the
   *                       error.
   */
  private initObj(classRef:any):void {
    this._classRef = classRef;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the class reference of the singleton that throws this error.
   * 
   * @return {any} the class reference of the singleton that throws this error.
   */
  public getClassRef():any {
    return this._classRef;
  }
}