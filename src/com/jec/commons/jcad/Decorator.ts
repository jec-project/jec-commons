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
 * The <code>Decorator</code> interface provides the set of API you must 
 * implement to create decorators that can be used by the JavaScript Connector 
 * API for Decorators.
 */
export interface Decorator {

  /**
   * Decorates the specified <code>target</code> object.
   * 
   * @param {any} target the object to decorate.
   * @return {any} the reference to the decorated object, specified by the
   *               <code>target</code> parameter.
   */
  decorate(target:any, ...rest):any;
}