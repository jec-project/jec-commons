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

/**
 * The <code>Level</code> class defines a set of standard logging levels that 
 * can be used  to control logging output. The logging Level objects are ordered 
 * and are specified by ordered integers. Enabling logging at a given level also 
 * enables logging at all higher levels.
 */
export enum LogLevel {

  /**
   * <code>TRACE</code> indicates that all messages should be logged.
   * This level is initialized to <code>0</code>.
   */
  TRACE = 0,

  /**
   * <code>DEBUG</code> is a message level for static debugging messages.
   * This level is initialized to <code>1</code>.
   */
  DEBUG = 1,

  /**
   * <code>INFO</code> is a message level for informational messages.
   * This level is initialized to <code>2</code>.
   */
  INFO = 2,

  /**
   * <code>WARN</code> is a message level indicating a potential problem.
   * This level is initialized to <code>3</code>.
   */
  WARN = 3,

  /**
   * <code>ERROR</code> is a message level indicating a serious failure.
   * This level is initialized to <code>4</code>.
   */
  ERROR = 4,

  /**
   * <code>ALWAYS</code> turns on outputs for all logs.
   * This level is initialized to <code>5</code>.
   */
  ALWAYS = 5,
  
  /**
   * <code>OFF</code> turns off outputs for all logs.
   * This level is initialized to <code>6</code>.
   */
  OFF = 6
}
