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
 * The <code>HttpMethod</code> class provides an enumeration of static values 
 * that define HTTP methods.
 */
export class HttpMethod {

  /**
   * Provides the reference for the <code>GET</code> HTTP method.
   */
  public static readonly GET:string = "GET";

  /**
   * Provides the reference for the <code>POST</code> HTTP method.
   */
  public static readonly POST:string = "POST";

  /**
   * Provides the reference for the <code>PUT</code> HTTP method.
   */
  public static readonly PUT:string = "PUT";

  /**
   * Provides the reference for the <code>DELETE</code> HTTP method.
   */
  public static readonly DELETE:string = "DELETE";

  /**
   * Provides the reference for the <code>HEAD</code> HTTP method.
   */
  public static readonly HEAD:string = "HEAD";

  /**
   * Provides the reference for the <code>OPTIONS</code> HTTP method.
   */
  public static readonly OPTIONS:string = "OPTIONS";

  /**
   * Provides the reference for the <code>TRACE</code> HTTP method.
   */
  public static readonly TRACE:string = "TRACE";

  /**
   * Provides the reference for the <code>CONNECT</code> HTTP method.
   */
  public static readonly CONNECT:string = "CONNECT";
}