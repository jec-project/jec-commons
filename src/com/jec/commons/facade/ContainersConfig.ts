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

import {ContainersConfigParams} from "./utils/ContainersConfigParams";
import {JecContainer} from "../lang/JecContainer";
import {ContainersConfigLauncher} from "./utils/ContainersConfigLauncher";

/**
 * The <code>@ContainersConfig</code> decorator provides AOP capabilities to let
 * developers easily initialize 3rd party JEC containers from a boostrap class.
 *
 * [[include:ContainersConfig.md]]
 *
 * @param {Array<ContainersConfigParams>} params the list of config parameters
 *                                               used to initialize the 3rd
 *                                               party GlassCat containers.
 */
export function ContainersConfig(
                                params:Array<ContainersConfigParams>):Function {

  return function(target:any, key:string,
                             descriptor:PropertyDescriptor):PropertyDescriptor {

    const launcher:ContainersConfigLauncher = new ContainersConfigLauncher();
    let originalMethod:Function = null;
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    originalMethod = descriptor.value;
    descriptor.value = function(jecContainer:JecContainer):void {
      launcher.initContainers(params, jecContainer);
      originalMethod.call(this, jecContainer);
    };
    
    return descriptor;
  }
}
