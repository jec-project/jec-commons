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
 * The <code>PrimitiveType</code> Enum contains string representations of
 * JavaScript primitive values, as returned by the <code>typeof</code> operator. 
 */
export enum PrimitiveType {

  /**
   * Represents the value for the <code>Undefined</code> type.
   */
  UNDEFINED = "undefined",

  /**
   * Represents the value for the <code>Null</code> type.
   */
  NULL = "object",

  /**
   * Represents the value for the <code>Boolean</code> type.
   */
  BOOLEAN = "boolean",

  /**
   * Represents the value for the <code>Number</code> type.
   */
  NUMBER = "number",

  /**
   * Represents the value for the <code>String</code> type.
   */
  STRING = "string",
  
  /**
   * Represents the value for the <code>Symbol</code> type.
   */
  SYMBOL = "symbol",

  /**
   * Represents the value for the <code>Function</code> type.
   */
  FUNCTION = "function",

  /**
   * Represents the value for any other object.
   */
  OBJECT = "object",
}