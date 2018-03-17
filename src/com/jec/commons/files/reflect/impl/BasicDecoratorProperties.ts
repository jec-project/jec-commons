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

import {DecoratorProperties} from "../DecoratorProperties";
import { DecoratorType } from "../utils/DecoratorType";

/**
 * A Data Transfert Object that defines all properties of a TypeScript decorator.
 */
export class BasicDecoratorProperties implements DecoratorProperties {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>BasicDecoratorProperties</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public name:string = null;

  /**
   * @inheritDoc
   */
  public classPath:string = null;

  /**
   * @inheritDoc
   */
  public value:string = null;

  /**
   * @inheritDoc
   */
  public decoratorType:DecoratorType = null;

  /**
   * @inheritDoc
   */
  public toString():string {
    const result:string = 
`[DecoratorProperties: name=${this.name}, classPath=${this.classPath}, decoratorType=${this.decoratorType},
value=${this.value}]`
    return result;
  }
}
