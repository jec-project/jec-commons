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
import {LogLevel} from "../LogLevel";
import {LoggerProxy} from "./LoggerProxy";
import {SingletonError} from "../../exceptions/SingletonError";

/**
 * Base implementation of a <code>LoggerProxy</code>.
 */
export class AbstractLoggerProxy implements LoggerProxy {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractLoggerProxy</code> instance.
   * 
   *
   * @param {string} logContext the log context for this
   *                            <code>LoggerProxy</code> instance.
   */
  constructor(logContext:string) {
    this._logContext = logContext;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Protected properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>Logger</code> instance wrapped by this <code>LoggerProxy</code>
   * instance.
   */
  protected __logger:Logger = null;

  //////////////////////////////////////////////////////////////////////////////
  // Protected methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * A convenient method that throws a singleton error.
   *
   * @param {any} classRef the class reference to the singleton that throws the
   *                       error.
   */
  protected throwSingletonError(classRef:any):void {
    throw new SingletonError(classRef);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The logging context associated this <code>LoggerProxy</code> instance.
   */
  private _logContext:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getLogger():Logger {
    return this.__logger;
  }

  /**
   * @inheritDoc
   */
  public setLogger(logger:Logger):void {
    this.__logger = logger;
  }

  /**
   * @inheritDoc
   */
  public getLogContext():string {
    return this._logContext;
  }

  /**
   * @inheritDoc
   */
  public log(message:string, logLevel:LogLevel = LogLevel.INFO):void {
    switch(logLevel) {
      case LogLevel.INFO:
        this.__logger.info(message, this._logContext);
        break;
      case LogLevel.WARN:
        this.__logger.warn(message, this._logContext);
        break;
      case LogLevel.ERROR:
        this.__logger.error(message, this._logContext);
        break;
      case LogLevel.DEBUG:
        this.__logger.debug(message, this._logContext);
        break;
      case LogLevel.TRACE:
        this.__logger.trace(message, this._logContext);
        break;
      case LogLevel.ALWAYS:
        this.__logger.always(message, this._logContext);
        break;
      case LogLevel.OFF:
      case null:
      default:
        return;
    }
  }
};
