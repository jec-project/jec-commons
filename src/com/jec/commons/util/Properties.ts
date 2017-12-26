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
 * The <code>Properties</code> class represents a persistent set of properties. 
 *
 * @param {Properties} [defaults] a property list that contains default values
 *                                for any keys not found in this property list.
 */
export class Properties {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>Properties</code> instance. 
   *
   * @param {Properties} [defaults] a property list that contains default values
   *                               for any keys not found in this property list.
   */
  constructor(defaults?:Properties) {
    this.initObj(defaults);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The internal list of key/value pairs mapped to this object.
   */
  private _properties:Map<string, string> = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {Properties} [defaults] a property list that contains default values
   *                                for any keys not found in this property
   *                                list.
   */
  private initObj(defaults?:Properties):void {
     this._properties = new Map<string, string>();
    if(defaults) {
      let keys:string[] = defaults.propertyNames();
      let len:number = keys.length;
      let key:string = null;
      while(len--) {
        key = keys[len];
        this.setProperty(key, defaults.getProperty(key));
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns an array of all the keys in this property list.
   * 
   * @return {Array<string>} an array of all the keys in this property list.
   */
  public propertyNames():string[] {
    let result:string[] = Array.from(this._properties.keys());
    return result;
  }

  /**
   * Searches for the property with the specified <code>key</code> in this
   * property list.
   * 
   * @param {string} key the key to search in this property list.
   * @return {string} the value in this property list with the specified key
   *                  value.
   */
  public getProperty(key:string):string {
    return this._properties.get(key);
  }
  
  /**
   * Places the property with the specified <code>key</code> and
   * <code>value</code> in this property list.
   * 
   * @param {string} key the key to place in this property list.
   * @param {string} value the value to place in this property list.
   * @return {any} the previous value of the specified key in this property
   *               list, or <code>undefined</code> if it did not have one.
   */
  public setProperty(key:string, value:string):any {
    let old:string = this._properties.get(key);
    this._properties.set(key, value);
    return old;
  }
}