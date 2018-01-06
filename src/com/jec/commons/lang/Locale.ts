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

// The reference to the dash character (-) used to represent locale strings.
const DASH:string = "-";

/**
 * A <code>Locale</code> object represents a specific geographical, political,
 * or cultural region.
 */
export class Locale {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>Locale</code> instance.
   */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // Private properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Represents the language tag for this <code>Locale</code> object, as 
   * specified by the IETF BCP 47 language tag.
   */
  private _language:string = null;

  /**
   * Represents the script tag for this <code>Locale</code> object, as specified
   * by the IETF BCP 47 language tag.
   */
  private _script:string = null;

  /**
   * Represents the region tag for this <code>Locale</code> object, as specified
   * by the IETF BCP 47 language tag.
   */
  private _region:string = null;

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the language tag for this <code>Locale</code> object.
   * 
   * @return {string} the language tag for this <code>Locale</code>  object.
   */
  public getLanguage():string {
    return this._language;
  }

  /**
   * Sets the language tag for this <code>Locale</code> object, as specified by
   * the IETF BCP 47 language tag.
   * 
   * @param {string} language the language tag for this <code>Locale</code>
   *                          object.
   */
  public setLanguage(language:string):void {
    this._language = language;
  }
  
  /**
   * Returns the script tag for this <code>Locale</code> object.
   * 
   * @return {string} the script tag for this <code>Locale</code> object.
   */
  public getScript():string {
    return this._script;
  }

  /**
   * Sets the script tag for this <code>Locale</code> object, as specified by
   * the IETF BCP 47 language tag.
   * 
   * @param {string} script the script tag for this <code>Locale</code> object.
   */
  public setScript(script:string):void {
    this._script = script;
  }
  
  /**
   * Returns the region tag for this <code>Locale</code> object.
   * 
   * @return {string} the region tag for this <code>Locale</code> object.
   */
  public getRegion():string {
    return this._region;
  }

  /**
   * Sets the region tag for this <code>Locale</code> object, as specified by
   * the IETF BCP 47 language tag.
   * 
   * @param {string} region the region tag for this <code>Locale</code> object.
   */
  public setRegion(region:string):void {
    this._region = region;
  }

  /**
   * Returns the string representation of this <code>Locale</code> object.
   * 
   * @return {string} the string representation of this <code>Locale</code>
   *                  object.
   */
  public toString():string {
    let loc:string = this._language;
    if(this._script) loc += this._script;
    loc += DASH + this._region;
    return loc;
  }
};
