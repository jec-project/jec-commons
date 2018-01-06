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
 * A convenient Enum for specifying encoding formats used in JEC modules.
 */
export enum EncodingFormat {

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Specifies the format for <code>utf8</code> encoding.
   */
  UTF8 = "utf8",

  /**
   * Specifies the format for <code>ascii</code> encoding.
   */
  ASCII = "ascii",
  
  /**
   * Specifies the format for <code>latin1</code> encoding.
   */
  LATIN1 = "latin1",
  
  /**
   * Specifies the format for <code>base64</code> encoding.
   */
  BASE64 = "base64",
  
  /**
   * Specifies the format for <code>hex</code> encoding.
   */
  HEX = "hex"
}
