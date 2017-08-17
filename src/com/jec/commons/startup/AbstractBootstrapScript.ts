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

import {BootstrapScript} from "./BootstrapScript";
import {JecContainer} from "../lang/JecContainer";
import {BootstrapError} from "./exceptions/BootstrapError";

/**
 * The abstract implementation of the <code>BootstrapScript<code> interface. 
 * This class should be extended by all configuration classes in EJPs.
 */
export abstract class AbstractBootstrapScript implements BootstrapScript {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractBootstrapScript</code> instance.
   */
  constructor() {}
  
  //////////////////////////////////////////////////////////////////////////////
  // Protectd properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Stores a reference to the priority for this <code>BootstrapScript<code>
   * object.
   */
  protected __priority:number = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public run(container:JecContainer):void {
    throw new BootstrapError("run() method must be overriden");
  }

  /**
   * @inheritDoc
   */
  public getPriority():number {
    return this.__priority;
  }

  /**
   * @inheritDoc
   */
  public setPriority(priority:number):void {
    this.__priority = priority;
  }
}