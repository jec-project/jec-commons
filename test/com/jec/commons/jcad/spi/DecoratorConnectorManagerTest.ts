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
import {expect, assert} from "chai";
import {SingletonError} from "../../../../../../src/com/jec/commons/exceptions/SingletonError";
import {DecoratorConnector} from "../../../../../../src/com/jec/commons/jcad/DecoratorConnector";

// Class to test:
import {DecoratorConnectorManager} from "../../../../../../src/com/jec/commons/jcad/spi/DecoratorConnectorManager";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/DecoratorConnectorManagerTestUtils";
import {GuidTestUtils} from "../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("DecoratorConnectorManager", ()=> {

  describe("#constructor()", ()=> {
    it("should throw a SingletonError", function() {
      let buildFromConstructor:Function = function():void {
        new DecoratorConnectorManager();
      };
      assert.throws(buildFromConstructor, SingletonError);
    });
  });

  describe("#getInstance()", ()=> {
    it("should return the reference to the singleton instance", function() {
      expect(DecoratorConnectorManager.getInstance()).to.be.instanceOf(DecoratorConnectorManager);
    });
  });

  describe("#getId()", ()=> {
    it("should always return a valid GUID", function() {
      this.retries(10);
      let guid:string = DecoratorConnectorManager.getInstance().getId();
      expect(guid).to.be.a("string");
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });
  });

  describe("#getConnector()", ()=> {
    it("should retrieve the same value as passed to the addConnector() method", function() {
      let manager:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
      let connector:DecoratorConnector = utils.buildDecoratorConnector();
      manager.addConnector(connector, utils.CONTEXT);
      expect(manager.getConnector(utils.JCAD_REFERENCE, utils.CONTEXT)).to.equal(connector);
    });
  });
  
  describe("#hasConnector()", ()=> {
    it("should return true when connector is registered", function() {
      let manager:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
      expect(manager.hasConnector(utils.JCAD_REFERENCE, utils.CONTEXT)).to.equal(true);
    });
  });

  describe("#removeConnector()", ()=> {
    it("should remove already registered connectors", function() {
      let manager:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
      let result:boolean = manager.removeConnector(utils.JCAD_REFERENCE, utils.CONTEXT);
      expect(result).to.equal(true);
      expect(manager.getConnector(utils.JCAD_REFERENCE, utils.CONTEXT)).to.equal(undefined);
    });
  });

  describe("#hasConnector()", ()=> {
    it("should return false when connector is not registered", function() {
      let manager:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
      expect(manager.hasConnector(utils.JCAD_REFERENCE, utils.CONTEXT)).to.equal(false);
    });
  });
});
