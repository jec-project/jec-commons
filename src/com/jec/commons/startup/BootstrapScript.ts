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

import {JecContainer} from "../lang/JecContainer";

/**
 * The <code>BootstrapScrip<code> interface defines the API that you must
 * implement to create configuration scripts for a JEC Application.
 */
export interface BootstrapScript {

  /**
   * Runs the configuration script.
   *
   * @method run
   * @param {JecContainer} container the JEC container for which to run this
   *                                 configuration script.
   */
  run(container:JecContainer):void;
}