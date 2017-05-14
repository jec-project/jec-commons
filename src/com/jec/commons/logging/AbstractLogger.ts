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

import {Logger} from "./Logger";
import {LogLevel} from "./LogLevel";

/**
 * Base implementation of a <code>Logger</code>.
 */
export abstract class AbstractLogger implements Logger {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractLogger</code> instance. 
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Protected properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The log level for this logger.
   */
  protected __logLevel:number = LogLevel.TRACE;

  /**
   * The name of this logger.
   */
  protected __name:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Protected methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a boolean which indicates whether the specified log level is
   * valid for this logger (<code>true</code>), or not (<code>false</code>).
   * 
   * @param {number} logLevel the log level to check. Valid values are the
   *                          constants of the <code>LogLevel</code> enum.
   * @returns {boolean} <code>true</code> whether the specified log level is 
   *                    valid for this logger; <code>false</code> otherwhise.
   */
  protected isValidLogLevel(logLevel:number):boolean {
    return (this.__logLevel <= logLevel);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getLogLevel():number {
    return this.__logLevel;
  }

  /**
   * @inheritDoc
   */
  public setLogLevel(logLevel:number):void {
    this.__logLevel = logLevel;
  }

  /**
   * @inheritDoc
   */
  public getName():string {
    return this.__name;
  }

  /**
   * @inheritDoc
   */
  public setName(name:string):void {
    this.__name = name;
  }

  /**
   * @inheritDoc
   */
  public debug(marker:any):void {}

  /**
   * @inheritDoc
   */
  public error(marker:any):void {}

  /**
   * @inheritDoc
   */
  public info(marker:any):void {}

  /**
   * @inheritDoc
   */
  public trace(marker:any):void {}

  /**
   * @inheritDoc
   */
  public warn(marker:any):void {}
};
