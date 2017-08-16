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
import {BootstrapConnectorRefs} from "../../../../../../src/com/jec/commons/startup/jcad/BootstrapConnectorRefs";

// Test:
describe("BootstrapConnectorRefs", ()=> {

  describe("#BOOTSTRAP_CONNECTOR_REF", ()=> {
    it("BOOTSTRAP_CONNECTOR_REF should return 'com.jec.commons.startup.annotations.Bootstrap", function() {
      expect(BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF).to.equal("com.jec.commons.startup.annotations.Bootstrap");
    });
  });
});