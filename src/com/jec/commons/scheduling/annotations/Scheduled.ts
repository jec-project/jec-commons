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

import {ScheduledParams} from "./core/ScheduledParams";
import {SchedulingConnectorRefs} from "../jcad/SchedulingConnectorRefs";
import {JcadContext} from "../../jcad/JcadContext";
import {JcadContextManager} from "../../jcad/spi/JcadContextManager";
import {DecoratorConnectorManager} from "../../jcad/spi/DecoratorConnectorManager";
import {ScheduledParamsValidator} from "../utils/ScheduledParamsValidator";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@Scheduled</code> decorator can be added to a method along with
 * trigger metadata.
 *
 * [[include:Scheduled.md]]
 *
 * @param {ScheduledParams} params the parameters for the associated shedulable
 *                                 method.
 */
export function Scheduled(params?:ScheduledParams):Function {
  
  return function(target:any, key:string,
                                       descriptor:PropertyDescriptor):Function {

    ////////////////////////////////////////////////////////////////////////////
    // Validation process
    ////////////////////////////////////////////////////////////////////////////

    ScheduledParamsValidator.validate(params);

    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext =
               CTXM.getContext(SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF);
    return DCM.getDecorator(
                SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF, ctx
              ).decorate(target, key, descriptor, params);
  }
}
