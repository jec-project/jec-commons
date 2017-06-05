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

import {AbstractDecoratorConnector} from "../../../src/com/jec/commons/jcad/spi/AbstractDecoratorConnector";
import {Decorator} from "../../../src/com/jec/commons/jcad/Decorator";

/*!
 * This module constains utilities used by the AbstractDecoratorConnectorTest
 * test suite.
 */

// Utilities:
class AbstractDecoratorConnectorImpl extends AbstractDecoratorConnector {}
class DecoratorMock implements Decorator {
  public decorate(target:any, ...rest):void {}
}
export const JCAD_REFERENCE:string = "jcad-test-ref";
export const DECORATOR:Decorator = new DecoratorMock();
export const buildAbstractDecoratorConnector:Function = function():AbstractDecoratorConnector {
  let connector:AbstractDecoratorConnector =
                  new AbstractDecoratorConnectorImpl(JCAD_REFERENCE, DECORATOR);
  return connector;
};
