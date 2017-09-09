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

import "mocha";
import {expect} from "chai";

// Class to test:
import {ConfigConnectorRefs} from "../../../../../../src/com/jec/commons/cfg/jcad/ConfigConnectorRefs";

// Test:
describe("ConfigConnectorRefs", ()=> {

  describe("#CACHE_CONTROL_CONNECTOR_REF", ()=> {
    it("CACHE_CONTROL_CONNECTOR_REF should return 'com.jec.commons.cfg.annotations.CacheControl", function() {
      expect(ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF).to.equal("com.jec.commons.cfg.annotations.CacheControl");
    });
  });
  
  describe("#STATIC_RESOURCE_CONNECTOR_REF", ()=> {
    it("STATIC_RESOURCE_CONNECTOR_REF should return 'com.jec.commons.cfg.annotations.StaticResource", function() {
      expect(ConfigConnectorRefs.STATIC_RESOURCE_CONNECTOR_REF).to.equal("com.jec.commons.cfg.annotations.StaticResource");
    });
  });
});
