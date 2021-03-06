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

import {JecContainer} from "../lang/JecContainer";

/**
 * An optional interface that is used by GlassCat implementations of JEC 
 * specifications that have to interact with <code>DomainContainer</code>
 * instances.
 */
export interface DelegatedContainer {

  /**
   * Sets the JEC container associated with this <code>DelegatedContainer</code>
   * object.
   * 
   * @param {JecContainer} container the JEC container associated with this
   *                                 <code>DelegatedContainer</code> object.
   */
  setDomainContainer(container:JecContainer):void;

  /**
   * Starts this container's main process.
   * 
   * @param {Function} callback the callback method called an the end of the
   *                            process. This function takes an 
   *                            <code>Error</code> object as parameter which
   *                            represents an error message if the process
   *                            failed.
   */
  process(callback:(err:Error|any)=>void):void;
};
