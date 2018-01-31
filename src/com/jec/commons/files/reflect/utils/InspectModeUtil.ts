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

import {InspectMode} from "./InspectMode";

/**
 * A utility class for working with inspect mode values.
 */
export class InspectModeUtil {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>InspectModeUtil</code> instance. 
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The string reference to the <code>InspectMode.NONE</code> property.
   */
  public static readonly NONE:string = "NONE";

  /**
   * The string reference to the <code>InspectMode.FILL_CACHE</code> property.
   */
  public static readonly FILL_CACHE:string = "FILL_CACHE";
  
  /**
   * The string reference to the <code>InspectMode.READ_CACHE</code> property.
   */
  public static readonly READ_CACHE:string = "READ_CACHE";

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a <code>InspectMode</code> constant that represents the specified
   * <code>inspectMode</code>.
   *
   * @param {string} inspectMode a string that represents the specified mode.
   * @return {number} a constant of the <code>InspectMode</code> enum.
   */
  public stringToInspectMode(inspectMode:string):number {
    return InspectMode[inspectMode] as number;
  }

  /**
   * Returns a string that represents the specified inspect mode.
   *
   * @param {InspectMode} mode a constant of the <code>InspectMode</code> enum.
   * @return {string} a string that represents the specified inspect mode.
   */
  public inspectModeToString(mode:InspectMode):string {
    let value:string = "";
    switch(mode) {
      case InspectMode.NONE : value = InspectModeUtil.NONE; break;
      case InspectMode.FILL_CACHE : value = InspectModeUtil.FILL_CACHE; break;
      case InspectMode.READ_CACHE : value = InspectModeUtil.READ_CACHE; break;
    }
    return value;
  }
};
