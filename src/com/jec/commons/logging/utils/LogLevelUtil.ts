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

import {LogLevel} from "../LogLevel";
import {LogLevelString} from "./LogLevelString";

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
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a <code>LogLevel</code> constant that represents the specified
   * <code>logLevel</code>.
   *
   * @param {LogLevelString} logLevel a string that represents the specified log
   *                                  level.
   * @return {LogLevel} a value of the <code>LogLevel</code> enum.
   */
  public stringTogLevel(logLevel:LogLevelString):LogLevel {
    return LogLevel[logLevel] as LogLevel;
  }

  /**
   * Returns a string that represents the specified log level.
   *
   * @param {LogLevel} level a value of the <code>LogLevel</code> enum.
   * @return {LogLevelString} a string that represents the specified log level.
   */
  public logLevelToString(level:LogLevel):LogLevelString {
    let value:LogLevelString = null;
    switch(level) {
      case LogLevel.TRACE : value = LogLevelString.TRACE; break;
      case LogLevel.DEBUG : value = LogLevelString.DEBUG; break;
      case LogLevel.INFO : value = LogLevelString.INFO; break;
      case LogLevel.WARN : value = LogLevelString.WARN; break;
      case LogLevel.ERROR : value = LogLevelString.ERROR; break;
    }
    return value;
  }
};
