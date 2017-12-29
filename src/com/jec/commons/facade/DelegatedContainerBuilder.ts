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

import {DelegatedContainer} from "./DelegatedContainer";
import {JecContainer} from "../lang/JecContainer";

/**
 * An optional interface that is used by JEC specification implementations that
 * have to interact with <code>JecContainer</code> objects.
 */
export interface DelegatedContainerBuilder {

  /**
   * Creates and returns new <code>DelegatedContainer</code> object.
   * 
   * @param {JecContainer} container the JEC container associated with the new
   *                                    <code>DelegatedContainer</code> object.
   * @return {DelegatedContainer} a new <code>DelegatedContainer</code> object.
   */
  build(container:JecContainer):DelegatedContainer;
};
