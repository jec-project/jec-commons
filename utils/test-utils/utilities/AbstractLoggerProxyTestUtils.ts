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

import {AbstractLoggerProxy} from "../../../src/com/jec/commons/logging/proxy/AbstractLoggerProxy";
import {LogLevel} from "../../../src/com/jec/commons/logging/LogLevel";
import {AbstractLogger} from "../../../src/com/jec/commons/logging/AbstractLogger";

/*!
 * This module constains utilities used by the AbstractLoggerProxyTest test
 * suite.
 */

// Utilities:
class AbstractLoggerImpl extends AbstractLogger {}
class AbstractLoggerProxyImpl extends AbstractLoggerProxy {}
export const buildAbstractLoggerProxy:Function = function():AbstractLoggerProxy {
  const loggerProxy:AbstractLoggerProxy = new AbstractLoggerProxyImpl(LOG_CONTEXT);
  loggerProxy.setLogger(new AbstractLoggerImpl());
  return loggerProxy;
};
export const LOG_CONTEXT:string = "[CONTEXT]";
export const LOG_LEVEL:LogLevel = LogLevel.INFO;
export const MESSAGE:string = "message";