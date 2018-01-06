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

import "mocha";
import * as chai from "chai";
import * as spies from "chai-spies";
import {ConfigConnectorRefs} from "../../../../../../src/com/jec/commons/cfg/jcad/ConfigConnectorRefs";
import {DecoratorConnectorManager} from "../../../../../../src/com/jec/commons/jcad/spi/DecoratorConnectorManager";
import {JcadContextManager} from "../../../../../../src/com/jec/commons/jcad/spi/JcadContextManager";
import {JcadContext} from "../../../../../../src/com/jec/commons/jcad/JcadContext";

// Annotation to test:
import * as CacheControlAnnotation from "../../../../../../src/com/jec/commons/cfg/annotations/CacheControl";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/CacheControlTestUtils";

// Chai declarations:
const expect:any = chai.expect;
chai.use(spies);

// Test:
describe("CacheControl", ()=> {

  let context:JcadContext = null;

  before(()=> {
    context = utils.initContext();
  });

  after(()=> {
    utils.resetContext(context);
  });

  beforeEach(()=> {
    utils.buildClassRef();
  });

  describe("@CacheControl", ()=> {

    let ctxmSpy:any = chai.spy.on(JcadContextManager.getInstance(), "getContext");
    let dcmSpy:any = chai.spy.on(DecoratorConnectorManager.getInstance(), "getDecorator");
    let decoratorSpy:any = chai.spy.on(utils.CACHE_CONTROL_DECORATOR, "decorate");
    let annotationSpy:any = chai.spy.on(CacheControlAnnotation, "CacheControl");

    it("should invoke the JcadContextManager with the ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF reference", function() {
      expect(ctxmSpy).to.have.been.called.with(ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF);
    });
    
    it("should invoke the DecoratorConnectorManager with the ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF reference and the correct JCAD context", function() {
      expect(dcmSpy).to.have.been.called.with(ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF, context);
    });
    
    it("should invoke the annotation decorator with the right parameters", function() {
      expect(annotationSpy).to.have.been.called;
    });
    
    it("should invoke the registered decorator with the right parameters", function() {
      expect(decoratorSpy).to.have.been.called;
    });
  });
});
