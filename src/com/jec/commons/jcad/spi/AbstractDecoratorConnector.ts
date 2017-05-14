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

import {DecoratorConnector} from "../DecoratorConnector";
import {Decorator} from "../Decorator";

/**
 * An abstract class for <code>DecoratorConnector<code> implementations.
 */
export abstract class AbstractDecoratorConnector implements DecoratorConnector {
  
  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>AbstractDecoratorConnector</code> instance.
   * 
   * @param {string} jcadReference the JCAD reference for this
   *                              <code>DecoratorConnector</code> object.
   * @param {Decorator} decorator the <code>Decorator</code> instance associated 
   *                              with this <code>DecoratorConnector</code>
   *                              object.
   */
  constructor(jcadReference:string, decorator:Decorator) {
    this.initObj(jcadReference, decorator);
  }

  ////////////////////////////////////////////////////////////////////////////
  // Protected properties
  ////////////////////////////////////////////////////////////////////////////

  /**
   * The JCAD reference for this <code>DecoratorConnector</code> object.
   */
  protected __jcadReference:string = null;

  /**
   * The <code>Decorator<code> instance associated with this 
   * <code>DecoratorConnector</code> object.
   */
  protected __decorator:Decorator = null;

  ////////////////////////////////////////////////////////////////////////////
  // Private methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   * 
   * @param {string} jcadReference the JCAD reference for this
   *                              <code>DecoratorConnector</code> object.
   * @param {Decorator} decorator the <code>Decorator</code> instance associated 
   *                              with this <code>DecoratorConnector</code>
   *                              object.
   */
  private initObj(jcadReference:string, decorator:Decorator):void {
    this.__jcadReference = jcadReference;
    this.__decorator = decorator;
  }

  ////////////////////////////////////////////////////////////////////////////
  // public methods
  ////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public getJcadReference():string {
    return this.__jcadReference;
  }
  
  /**
   * @inheritDoc
   */
  public getDecorator():Decorator {
    return this.__decorator;
  }
}
