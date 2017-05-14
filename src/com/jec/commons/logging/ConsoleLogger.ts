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
import {AbstractLogger} from "./AbstractLogger";
import {LogLevel} from "./LogLevel";
import {LogLevelUtil} from "./LogLevelUtil";
import {LogFormatter} from "./LogFormatter";
import {DefaultLogFormatter} from "./DefaultLogFormatter";

/**
 * Creates a basic logger which outputs all log messages to the console.
 */
export class ConsoleLogger extends AbstractLogger implements Logger {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ConsoleLogger</code> instance. 
   */
  constructor() {
    super();
    this.init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The log messages formatter for this <code>Logger</code>.
   */
  private _formatter:LogFormatter = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this <code>Logger</code>.
   */
  private init():void {
    this._formatter = new DefaultLogFormatter();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public debug(marker:any, context:string = ""):void {
    if(this.isValidLogLevel(LogLevel.DEBUG)) {
      console.log(
        this._formatter.format(LogLevelUtil.DEBUG, marker, false, context)
      );
    }
  }

  /**
   * @inheritDoc
   */
  public error(marker:any, context:string = ""):void {
    if(this.isValidLogLevel(LogLevel.ERROR)) {
      console.log(
        this._formatter.format(LogLevelUtil.ERROR, marker, false, context)
      );
    }
  }

  /**
   * @inheritDoc
   */
  public info(marker:any, context:string = ""):void {
    if(this.isValidLogLevel(LogLevel.INFO)) {
      console.log(
        this._formatter.format(LogLevelUtil.INFO, marker, false, context)
      );
    }
  }

  /**
   * @inheritDoc
   */
  public trace(marker:any, context:string = ""):void {
    if(this.isValidLogLevel(LogLevel.TRACE)) {
      console.log(
        this._formatter.format(LogLevelUtil.TRACE, marker, false, context)
      );
    }
  }

  /**
   * @inheritDoc
   */
  public warn(marker:any, context:string = ""):void {
    if(this.isValidLogLevel(LogLevel.WARN)) {
      console.log(
        this._formatter.format(LogLevelUtil.WARN, marker, false, context)
      );
    }
  }

  /**
   * @inheritDoc
   */
  public toString():string {
    return "[Logger::ConsoleLogger]";
  }
};
