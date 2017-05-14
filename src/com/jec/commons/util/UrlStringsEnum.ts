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

/**
 * A collection of constants for working with URL strings.
 */
export class UrlStringsEnum {

  ////////////////////////////////////////////////////////////////////////////
  // Public constants
  ////////////////////////////////////////////////////////////////////////////

  /**
   * A static reference to the pattern used to create permissive paths
   * (<code>/*</code>).
   */
  public static readonly PERM_MARK:string = "/*";
  
  /**
   * A static reference to the asterisk character (<code>*</code>).
   */
  public static readonly ASTERISK:string = "*";
   
  /**
   * A static reference to the question mark (<code>?</code>) character.
   */
  public static readonly MARK:string = "?";

  /**
   * A static reference to the anchor tag (<code>#</code>) character.
   */
  public static readonly ANCHOR:string = "#";
  
  /**
   * A static reference to the slash character (<code>/</code>).
   */
  public static readonly SLASH:string = "/";
  
  /**
   * A static reference to the string that represents a sheme delimiter
   * (<code>://</code>).
   */
  public static readonly SCHEME_DELIMITER:string = "://";

  /**
   * A static reference to the slash character (<code>:</code>).
   */
  public static readonly COLON:string = ":";
  
  /**
   * A static reference to the dot character (<code>.</code>).
   */
  public static readonly DOT:string = ".";

  /**
   * A static reference to an empty string.
   */
  public static readonly EMPTY_STRING:string = "";
  
  /**
   * A static reference to a relative path string (<code>../</code>).
   */
  public static readonly RELATIVE_PATH:string = "../";
}