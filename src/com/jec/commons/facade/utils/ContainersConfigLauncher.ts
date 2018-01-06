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

import {ContainersConfigParams} from "./ContainersConfigParams";
import {JecContainer} from "../../lang/JecContainer";
import {DelegatedContainer} from "../DelegatedContainer";
import {DelegatedContainerBuilder} from "../DelegatedContainerBuilder";
import {ContainerConfigMessageComposer} from "./ContainerConfigMessageComposer";

/**
 * The <code>ContainersConfigLauncher</code> visitor class initializes all 
 * delegated containers defined by a <code>@ContainersConfig</code> decorator.
 */
export class ContainersConfigLauncher {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>ContainersConfigLauncher</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Launches the initialization process for the specified container config.
   * 
   * @param {ContainersConfigParams} containerCfg the container config for which
   *                                              to launch the init process.
   * @param {JecContainer} domainContainer the JEC container used by the newly
   *                                       initialized container. 
   */
  private launchContainer(containerCfg:ContainersConfigParams,
                                               jecContainer:JecContainer):void {
    let builder:DelegatedContainerBuilder = new containerCfg.builder;
    let container:DelegatedContainer = builder.build(jecContainer);
    let composer:ContainerConfigMessageComposer = null;
    container.process((err:Error|any)=>{
      if(err) {
        composer = new ContainerConfigMessageComposer();
        throw new Error(
          composer.compose(err, containerCfg)
        );
      }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes all containers specified in the <code>config</code> collection.
   * 
   * @param {ContainersConfigParams} config a list of containers' configuations.
   * @param {JecContainer} jecContainer the JEC container used by the newly
   *                                    initialized containers. 
   */
  public initContainers(config:Array<ContainersConfigParams>,
                                               jecContainer:JecContainer):void {
    let len:number = config.length -1;
    let i:number = 0;
    for(; i<= len; ++i){
      this.launchContainer(config[i], jecContainer);
    }
  }
}