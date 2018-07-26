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
import {expect} from "chai";
import {JcadContextImpl} from "../../../../../../src/com/jec/commons/jcad/spi/JcadContextImpl";
import {JcadContext} from "../../../../../../src/com/jec/commons/jcad/JcadContext";

// Class to test:
import {JcadContextFactory} from "../../../../../../src/com/jec/commons/jcad/spi/JcadContextFactory";

// Test:
describe("JcadContextFactory", ()=> {

  describe("#create()", ()=> {
    it("should return a new JcadContext instance", function() {
      const factory:JcadContextFactory = new JcadContextFactory();
      const context:JcadContext = factory.create();
      // We cannot test interfaces inheritance, so we check whether it is the
      // default implementation, or not:
      expect(context).to.be.instanceOf(JcadContextImpl); 
    });
  });
});