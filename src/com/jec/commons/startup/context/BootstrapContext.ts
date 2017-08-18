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

import {BootstrapScript} from "../BootstrapScript";
import {ContainerContext} from "../../context/ContainerContext";

/**
 * The <code>BootstrapContext</code> interface defines a set of methods that use  
 * a <code>BootstrapScript</code> object to communicate with a domain container.
 */
export interface BootstrapContext extends ContainerContext {

  /**
   * Adds a <code>BootstrapScript</code> object to this
   * <code>BootstrapContext</code> object.
   * 
   * @param {BootstrapScript} script the <code>BootstrapScript</code> object to 
   *                                 add to this <code>BootstrapContext</code>.
   */
  addScript(script:BootstrapScript):void;

  /**
   * Returns the list of <code>BootstrapScript</code> objects that have been
   * added to this context.
   * 
   * @return {Array<BootstrapScript>} the list of <code>BootstrapScript</code> 
   *                                  objects in this context.
   */
  getScriptList():BootstrapScript[];
}
