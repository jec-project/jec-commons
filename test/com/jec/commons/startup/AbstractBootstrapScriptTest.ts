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
import {BootstrapError} from "../../../../../src/com/jec/commons/startup/exceptions/BootstrapError";

// Class to test:
import {AbstractBootstrapScript} from "../../../../../src/com/jec/commons/startup/AbstractBootstrapScript";

// Utilities:
import {BootstrapScriptImpl} from "../../../../../utils/test-utils/classes/BootstrapScriptImpl";

// Test:
describe("AbstractBootstrapScript", ()=> {

  describe("#getPriority()", ()=> {

    let script:AbstractBootstrapScript = new BootstrapScriptImpl();

    it("should return 'null' as default value", function() {
      expect(script.getPriority()).to.be.null;
    });

    it("should return the same value as passed to the setter method", function() {
      let priority:number = 3;
      script.setPriority(priority);
      expect(script.getPriority()).to.equal(priority);
    });
  });
  
  describe("#run()", ()=> {
    let script:AbstractBootstrapScript = new BootstrapScriptImpl();
    let doRun:Function = function():void {
      script.run(null);
    };
    it("should throw a BootstrapError", function() {
      expect(doRun).to.throw(BootstrapError);
    });
  });
});
