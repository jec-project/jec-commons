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
 * The <code>HttpHeader</code> class provides an enumeration of static values 
 * that define HTTP header fields.
 */
export class HttpHeader {

  /**
   * Provides the reference for the <code>Accept</code> header.
   */
  public static readonly ACCEPT:string = "Accept";

  /**
   * Provides the reference for the <code>Access-Control-Allow-Origin</code>
   * header.
   */
  public static readonly ACCESS_CONTROL_ALLOW_ORIGIN:string =
                                                  "Access-Control-Allow-Origin";

  /**
   * Provides the reference for the <code>Cache-Control</code> header.
   */
  public static readonly CACHE_CONTROL:string = "Cache-Control";

  /**
   * Provides the reference for the <code>Content-Type</code> header.
   */
  public static readonly CONTENT_TYPE:string = "Content-Type";

  /**
   * Provides the reference for the <code>X-Powered-By</code> header.
   */
  public static readonly X_POWERED_BY:string = "X-Powered-By";
  
}