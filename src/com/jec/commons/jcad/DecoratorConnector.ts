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

import {Decorator} from "./Decorator";

/**
 * The <code>DecoratorConnector</code> interface provides the set of API you 
 * must implement to create decorator connectors that can be used by the  
 * JavaScript Connector API for Decorators.
 */
export interface DecoratorConnector {

  /**
   * Returns the string reference that must be used to retreive this connector
   * from the <code>DecoratorConnectorManager</code> registry.
   * 
   * @return {string} the string reference that must be used to retreive this 
   *                  connector from the <code>DecoratorConnectorManager</code>
   *                  registry.
   */
  getJcadReference():string;

  /**
   * Returns the reference to the <code>Decorator</code> object associated with 
   * this <code>DecoratorConnector</code> instance.
   * 
   * @return {Decorator} the reference to the <code>Decorator</code> object  
   *                     associated with this <code>DecoratorConnector<code> instance.
   */
  getDecorator():Decorator;
}