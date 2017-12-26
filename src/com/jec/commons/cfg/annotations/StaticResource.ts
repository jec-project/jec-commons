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

import {CacheControlPolicy} from "../../net/http/CacheControlPolicy";
import {ConfigConnectorRefs} from "../jcad/ConfigConnectorRefs";
import {JcadContext} from "../../jcad/JcadContext";
import {JcadContextManager} from "../../jcad/spi/JcadContextManager";
import {DecoratorConnectorManager} from "../../jcad/spi/DecoratorConnectorManager";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@StaticResource</code> decorator specifes autowire configurations  
 * for static resources in the JEC specification.
 *
 * [[include:StaticResource.md]]
 *
 * @param {CacheControlPolicy} params the parameters for the associated static
 *                                    resource.
 */
export function StaticResource(params?:CacheControlPolicy):Function {
  
  return function(target:any):Function {

    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext =
             CTXM.getContext(ConfigConnectorRefs.STATIC_RESOURCE_CONNECTOR_REF);
    return DCM.getDecorator(
                  ConfigConnectorRefs.STATIC_RESOURCE_CONNECTOR_REF, ctx
                ).decorate(target, params);
  }
}
