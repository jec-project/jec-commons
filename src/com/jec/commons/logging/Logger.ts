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

import {LogLevel} from "./LogLevel";

/**
 * The base interface for all logger instances of JEC modules.
 */
export interface Logger {

  ////////////////////////////////////////////////////////////////////////////
  // Public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the log level for this <code>Logger</code>.
   *
   * @return {LogLevel} the log level for this <code>Logger</code>.
   */
  getLogLevel():LogLevel;

  /**
   * Sets the log level for this <code>Logger</code>.
   *
   * @param {LogLevel} logLevel the new log level for this <code>Logger</code>.
   */
  setLogLevel(logLevel:LogLevel):void;

  /**
   * Returns the name of this <code>Logger</code>.
   *
   * @return {string} the name of this <code>Logger</code>.
   */
  getName():string;

  /**
   * Sets the name of this <code>Logger</code>.
   *
   * @param {string} mane the name of this <code>Logger</code>.
   */
  setName(mane:string):void;

  /**
   * Logs a message with the specific marker at the <code>DEBUG</code> level.
   *
   * @param {any} marker the marker to log.
   * @param {string} context an optional context information whis is added to
   *                         the log message.
   */
  debug(marker:any, context?:string):void;

  /**
   * Logs a message with the specific marker at the <code>ERROR</code> level.
   * 
   * @param {any} marker the marker to log.
   * @param {string} context an optional context information whis is added to
   *                         the log message.
   */
  error(marker:any, context?:string):void;

  /**
   * Logs a message with the specific marker at the <code>INFO</code> level.
   *
   * @param {any} marker the marker to log.
   * @param {string} context an optional context information whis is added to
   *                         the log message.
   */
  info(marker:any, context?:string):void;

  /**
   * Logs a message with the specific marker at the <code>TRACE</code> level.
   * 
   * @param {any} marker the marker to log.
   * @param {string} context an optional context information whis is added to
   *                         the log message.
   */
  trace(marker:any, context?:string):void;

  /**
   * Logs a message with the specific marker at the <code>WARN</code> level.
   * 
   * @param {any} marker the marker to log.
   * @param {string} context an optional context information whis is added to
   *                         the log message.
   */
  warn(marker:any, context?:string):void;
};
