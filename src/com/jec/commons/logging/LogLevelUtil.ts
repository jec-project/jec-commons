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

import {LogLevel} from "./LogLevel";

/**
 * A utility class for working with Log levels.
 */
export class LogLevelUtil {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>LogLevelUtil</code> instance. 
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The string reference to the <code>LogLevel.TRACE</code> property.
   */
  public static readonly TRACE:string = "TRACE";

  /**
   * The string reference to the <code>LogLevel.DEBUG</code> property.
   */
  public static readonly DEBUG:string = "DEBUG";
  
  /**
   * The string reference to the <code>LogLevel.INFO</code> property.
   */
  public static readonly INFO:string = "INFO";

  /**
   * The string reference to the <code>LogLevel.WARN</code> property.
   */
  public static readonly WARN:string = "WARN";
  
  /**
   * The string reference to the <code>LogLevel.ERROR</code> property.
   */
  public static readonly ERROR:string = "ERROR";

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a <code>LogLevel</code> constant that represents the specified
   * <code>logLevel</code>.
   *
   * @param {string} logLevel a string that represents the specified log level.
   * @return {number} a constant of the <code>LogLevel</code> enum.
   */
  public stringTogLevel(logLevel:string):number {
    return LogLevel[logLevel] as number;
  }

  /**
   * Returns a string that represents the specified log level.
   *
   * @param {number} level a constant of the <code>LogLevel</code> enum.
   * @return {string} a string that represents the specified log level.
   */
  public logLevelToString(level:number):string {
    let value:string = "";
    switch(level) {
      case LogLevel.TRACE : value = LogLevelUtil.TRACE; break;
      case LogLevel.DEBUG : value = LogLevelUtil.DEBUG; break;
      case LogLevel.INFO : value = LogLevelUtil.INFO; break;
      case LogLevel.WARN : value = LogLevelUtil.WARN; break;
      case LogLevel.ERROR : value = LogLevelUtil.ERROR; break;
    }
    return value;
  }
};
