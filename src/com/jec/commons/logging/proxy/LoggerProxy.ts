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

import {Logger} from "../Logger";

/**
 * A singleton that is used by JEC frameworks to send logs to a
 * <code>Logger</code> object defined by the execution environement.
 */
export interface LoggerProxy {

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Sets the <code>Logger</code> object for this <code>LoggerProxy</code>
   * instance.
   * 
   * @param {Logger} logger the logger associated with this 
   *                        <code>LoggerProxy</code> instance.
   */
  setLogger(logger:Logger):void;

  /**
   * Returns the <code>Logger</code> object for this <code>LoggerProxy</code>
   * instance.
   * 
   * @return {Logger} the logger associated with this <code>LoggerProxy</code>
   *                  instance.
   */
  getLogger():Logger;

  /**
   * Returns the log context for this <code>LoggerProxy</code> instance.
   * 
   * @return {string} the log context for this <code>LoggerProxy</code>
   *                  instance.
   */
  getLogContext():string;

  /**
   * Sends the specified message to the <code>Logger<code> wrapped by this 
   * <code>LoggerProxy</code> instance.
   * 
   * @param {string} message the message to log.
   */
  log(message:string, logLevel?:number):void;
};
