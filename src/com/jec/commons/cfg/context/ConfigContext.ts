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

import {JecConfig} from "../JecConfig";
import {ContainerContext} from "../../context/ContainerContext";

/**
 * The <code>ConfigContext</code> interface defines a set of methods that use a
 * <code>JecConfig</code> object to communicate with a domain container.
 */
export interface ConfigContext extends ContainerContext {

  /**
   * Adds a <code>JecConfig</code> object to this <code>ConfigContext</code>
   * object.
   * 
   * @param {JecConfig} config the <code>JecConfig</code> object to add to this
   *                           <code>ConfigContext</code>.
   */
  addConfig(config:JecConfig):void;

  /**
   * Returns the list of <code>JecConfig</code> objects that have been added to
   * this context.
   * 
   * @return {Array<JecConfig>} the list of <code>JecConfig</code> objects in
   *                            this context.
   */
  getConfigList():JecConfig[];
}
