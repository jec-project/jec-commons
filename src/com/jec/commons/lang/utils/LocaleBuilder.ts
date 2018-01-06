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

import {Locale} from "../Locale";

/**
 * <code>LocaleBuilder</code> objects are used to build instances of
 * <code>Locale</code> from values configured by the setters.
 */
export class LocaleBuilder {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>LocaleBuilder</code> instance.
   */
  constructor() {}

  ////////////////////////////////////////////////////////////////////////////
  // Private properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Represents the language tag for this <code>LocaleBuilder</code> object, as 
   * specified by the IETF BCP 47 language tag.
   */
  private _language:string = null;

  /**
   * Represents the script tag for this <code>LocaleBuilder</code> object, as 
   * specified by the IETF BCP 47 language tag.
   */
  private _script:string = null;

  /**
   * Represents the region tag for this <code>LocaleBuilder</code> object, as 
   * specified by the IETF BCP 47 language tag.
   */
  private _region:string = null;

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Sets the language tag for this <code>Locale</code> object to build, as 
   * specified by the IETF BCP 47 language tag.
   * 
   * @param {string} language the language tag for this <code>Locale</code>
   *                          object to build.
   * @returns {LocaleBuilder} a reference to this <code>LocaleBuilder</code>
   *                          instance.
   */
  public setLanguage(language:string):LocaleBuilder {
    this._language = language;
    return this;
  }

  /**
   * Sets the script tag for this <code>Locale</code> object to build, as 
   * specified by the IETF BCP 47 language tag.
   * 
   * @param {string} script the script tag for this <code>Locale</code> object
   *                        to build.
   * @returns {LocaleBuilder} a reference to this <code>LocaleBuilder</code>
   *                          instance.
   */
  public setScript(script:string):LocaleBuilder {
    this._script = script;
    return this;
  }

  /**
   * Sets the region tag for this <code>Locale</code> object to build, as 
   * specified by the IETF BCP 47 language tag.
   * 
   * @param {string} region the region tag for this <code>Locale</code> object
   *                        to build.
   * @returns {LocaleBuilder} a reference to this <code>LocaleBuilder</code>
   *                          instance.
   */
  public setRegion(region:string):LocaleBuilder {
    this._region = region;
    return this;
  }

  /**
   * Resets the builder to its initial, empty state.
   */
  public clear():void {
    this._language = null;
    this._script = null;
    this._region = null;
  }

  /**
   * Returns an instance of <code>Locale</code> created from the fields set on
   * this builder.
   * 
   * @return {Locale} an instance of <code>Locale</code> created from the fields 
   *                  set on this builder.
   */
  public build():Locale {
    let locale:Locale = new Locale();
    locale.setLanguage(this._language);
    locale.setScript(this._script);
    locale.setRegion(this._region);
    return locale;
  }
};
