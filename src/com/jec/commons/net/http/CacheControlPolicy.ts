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
 * The <code>CacheControlPolicy</code> interface provides the API you must
 * implement to specify the content of the <code>Cache-Control</code>
 * general-header field.
 */
export interface CacheControlPolicy {

  /**
   * The URL on which to apply the cache control policy.
   */
  urlPattern:string;
  
  /**
   * Adds the <code>must-revalidate</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  mustRevalidate?:boolean;

  /**
   * Adds the <code>no-cache</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  noCache?:boolean;
  
  /**
   * Adds the <code>no-store</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  noStore?:boolean;
  
  /**
   * Adds the <code>no-transform</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  noTransform?:boolean;
  
  /**
   * Adds the <code>public</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  isPublic?:boolean;
  
  /**
   * Adds the <code>private</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  isPrivate?:boolean;
  
  /**
   * Adds the <code>proxy-revalidate</code> directive to the
   * <code>Cache-Control</code> header whether it is <code>true</code>.
   */
  proxyRevalidate?:boolean;
  
  /**
   * Adds the <code>max-age</code> directive to the
   * <code>Cache-Control</code> header it is not <code>null</code>.
   */
  maxAge?:number;
    
  /**
   * Adds the <code>s-maxage</code> directive with the specified value 
   * to the <code>Cache-Control</code> header it is not <code>null</code>.
   */
  sMaxage?:number;
}