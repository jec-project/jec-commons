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

import {ClassLoader} from "../../../src/com/jec/commons/lang/ClassLoader";
import {DecoratorConnectorManager} from "../../../src/com/jec/commons/jcad/spi/DecoratorConnectorManager";
import {JcadContextManager} from "../../../src/com/jec/commons/jcad/spi/JcadContextManager";
import {AbstractDecoratorConnector} from "../../../src/com/jec/commons/jcad/spi/AbstractDecoratorConnector";
import {JcadContextFactory} from "../../../src/com/jec/commons/jcad/spi/JcadContextFactory";
import {JcadContext} from "../../../src/com/jec/commons/jcad/JcadContext";
import {Decorator} from "../../../src/com/jec/commons/jcad/Decorator";
import {DecoratorConnector} from "../../../src/com/jec/commons/jcad/DecoratorConnector";
import {SchedulingConnectorRefs} from "../../../src/com/jec/commons/scheduling/jcad/SchedulingConnectorRefs";
import {ScheduledParams} from "../../../src/com/jec/commons/scheduling/annotations/core/ScheduledParams";

/*!
* This module constains utilities used by the ScheduledTest test suite.
*/

// Utilities:
const LOADER:ClassLoader = new ClassLoader();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/classes/ScheduledTestClass";
class TestConnector extends AbstractDecoratorConnector {}
class TestDecorator implements Decorator {
decorate(target:any, key:string, descriptor:PropertyDescriptor,
  params?:ScheduledParams):any { return target; }
}
export const KEY:string = "taskMethod";
export const TEST_DECORATOR:Decorator = new TestDecorator();
export const buildClassRef:Function = function():void {
  let ClassRef:any = LOADER.loadClass(VALID_CLASS);
  new ClassRef();
};
export const initContext:Function = function():JcadContext {
  let factory:JcadContextFactory = new JcadContextFactory();
  let connector = new TestConnector(SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF, TEST_DECORATOR);
  let context:JcadContext = factory.create();
  DecoratorConnectorManager.getInstance().addConnector(connector, context);
  JcadContextManager.getInstance().addContext(SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF, context);
  return context;
}
export const resetContext:Function = function(context:JcadContext):void {
  JcadContextManager.getInstance().removeContext(SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF);
  DecoratorConnectorManager.getInstance().removeConnector(SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF, context);
  context = null;
}
