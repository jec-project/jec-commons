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
import {expect, assert} from "chai";
import {SingletonError} from "../../../../../../src/com/jec/commons/exceptions/SingletonError";
import {JcadContext} from "../../../../../../src/com/jec/commons/jcad/JcadContext"; 
import {JcadContextError} from "../../../../../../src/com/jec/commons/jcad/exceptions/JcadContextError";

// Class to test:
import {JcadContextManager} from "../../../../../../src/com/jec/commons/jcad/spi/JcadContextManager";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/JcadContextManagerTestUtils";
import {GuidTestUtils} from "../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("JcadContextManager", ()=> {

  describe("#constructor()", ()=> {
    it("should throw a SingletonError", function() {
      let buildFromConstructor:Function = function():void {
        new JcadContextManager();
      };
      assert.throws(buildFromConstructor, SingletonError);
    });
  });

  describe("#getInstance()", ()=> {
    it("should return the reference to the singleton instance", function() {
      expect(JcadContextManager.getInstance()).to.be.instanceOf(JcadContextManager);
    });
  });

  describe("#getId()", ()=> {
    it("should always return a valid GUID", function() {
      this.retries(10);
      let guid:string = JcadContextManager.getInstance().getId();
      expect(guid).to.be.a("string");
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });
  });

  describe("#getContext()", ()=> {
    it("should retrieve the same value as passed to the setContext() method", function() {
      let manager:JcadContextManager = JcadContextManager.getInstance();
      let context:JcadContext = utils.buildContext();
      manager.addContext(utils.JCAD_REFERENCE, context);
      expect(manager.getContext(utils.JCAD_REFERENCE)).to.equal(context);
    });
  });
  
  describe("#hasContext()", ()=> {
    it("should return true when context is registered", function() {
      let manager:JcadContextManager = JcadContextManager.getInstance();
      expect(manager.hasContext(utils.JCAD_REFERENCE)).to.equal(true);
    });
  });

  describe("#removeContext()", ()=> {
    it("should remove already registered contexts", function() {
      let manager:JcadContextManager = JcadContextManager.getInstance();
      let context:JcadContext = manager.removeContext(utils.JCAD_REFERENCE);
      expect(context).not.to.be.null;
      expect(manager.getContext(utils.JCAD_REFERENCE)).to.equal(undefined);
    });
  });

  describe("#hasContext()", ()=> {
    it("should return false when context is not registered", function() {
      let manager:JcadContextManager = JcadContextManager.getInstance();
      expect(manager.hasContext(utils.JCAD_REFERENCE)).to.equal(false);
    });
  });

  describe("#addContext()", ()=> {
    it("should throw an error when a context reference already exixts", function() {
      let manager:JcadContextManager = JcadContextManager.getInstance();
      let context:JcadContext = utils.buildContext();
      let addExistingContextReference:Function = function():void {
        manager.addContext(utils.JCAD_REFERENCE, null);
      };
      manager.addContext(utils.JCAD_REFERENCE, context);
      assert.throws(addExistingContextReference, JcadContextError);
    });
  });
});
