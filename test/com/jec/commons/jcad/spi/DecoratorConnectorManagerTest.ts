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
import {DecoratorConnector} from "../../../../../../src/com/jec/commons/jcad/DecoratorConnector";
import {JcadContextError} from "../../../../../../src/com/jec/commons/jcad/exceptions/JcadContextError";

// Class to test:
import {DecoratorConnectorManager} from "../../../../../../src/com/jec/commons/jcad/spi/DecoratorConnectorManager";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/DecoratorConnectorManagerTestUtils";
import {GuidTestUtils} from "../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("DecoratorConnectorManager", ()=> {

  describe("#constructor()", ()=> {
    it("should throw a SingletonError", function() {
      const buildFromConstructor:Function = function():void {
        new DecoratorConnectorManager();
      };
      assert.throws(buildFromConstructor, SingletonError);
    });
  });

  describe("#getInstance()", ()=> {
    it("should return the reference to the singleton instance", function() {
      expect(
        DecoratorConnectorManager.getInstance()
      ).to.be.instanceOf(DecoratorConnectorManager);
    });
  });

  describe("#getInstance()", ()=> {
    it("should return a singleton", function() {
      expect(
        DecoratorConnectorManager.getInstance()
      ).to.equal(DecoratorConnectorManager.getInstance());
    });
  });

  describe("#getId()", ()=> {
    it("should always return a valid GUID", function() {
      this.retries(10);
      const guid:string = DecoratorConnectorManager.getInstance().getId();
      expect(guid).to.be.a("string");
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });
  });

  describe("#getConnector()", ()=> {
    it("should retrieve the same value as passed to the addConnector() method", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const connector:DecoratorConnector = utils.buildDecoratorConnector();
      manager.addConnector(connector, utils.CONTEXT);
      expect(
        manager.getConnector(utils.JCAD_REFERENCE, utils.CONTEXT)
      ).to.equal(connector);
    });
  });
  
  describe("#hasConnector()", ()=> {
    it("should return true when connector is registered", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      expect(
        manager.hasConnector(utils.JCAD_REFERENCE, utils.CONTEXT)
      ).to.equal(true);
    });
  });

  describe("#removeConnector()", ()=> {
    it("should remove already registered connectors", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const result:boolean =
                   manager.removeConnector(utils.JCAD_REFERENCE, utils.CONTEXT);
      expect(result).to.equal(true);
      expect(
        manager.getConnector(utils.JCAD_REFERENCE, utils.CONTEXT)
      ).to.equal(undefined);
    });
  });

  describe("#hasConnector()", ()=> {
    it("should return false when connector is not registered", function() {
      const manager:DecoratorConnectorManager = 
                                        DecoratorConnectorManager.getInstance();
      expect(
        manager.hasConnector(utils.JCAD_REFERENCE, utils.CONTEXT)
      ).to.equal(false);
    });
  });

  describe("#addConnector(null, null)", ()=> {

    it("should throw a JcadContextError when the specified 'connector' parameter is 'null'", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const doAddConnector:Function = function():void {
        manager.addConnector(null, null);
      };
      expect(doAddConnector).to.throw(JcadContextError);
    });

    it("should throw a JcadContextError when the specified 'context' parameter is 'null'", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const connector:DecoratorConnector = utils.buildDecoratorConnector();
      const doAddConnector:Function = function():void {
        manager.addConnector(connector, null);
      };
      expect(doAddConnector).to.throw(JcadContextError);
    });
  });

  describe("#getConnector(any, null)", ()=> {
    it("should throw a JcadContextError when the specified 'context' parameter is 'null'", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const doGetConnector:Function = function():void {
        manager.getConnector("anyRef", null);
      };
      expect(doGetConnector).to.throw(JcadContextError);
    });
  });
  
  describe("#hasConnector(any, null)", ()=> {
    it("should throw a JcadContextError when the specified 'context' parameter is 'null'", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const doHasConnector:Function = function():void {
        manager.hasConnector("anyRef", null);
      };
      expect(doHasConnector).to.throw(JcadContextError);
    });
  });
  
  describe("#getDecorator(any, null)", ()=> {
    it("should throw a JcadContextError when the specified 'context' parameter is 'null'", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const doGetConnector:Function = function():void {
        manager.getDecorator("anyRef", null);
      };
      expect(doGetConnector).to.throw(JcadContextError);
    });
  });
  
  describe("#removeConnector(any, null)", ()=> {
    it("should throw a JcadContextError when the specified 'context' parameter is 'null'", function() {
      const manager:DecoratorConnectorManager =
                                        DecoratorConnectorManager.getInstance();
      const doRemoveConnector:Function = function():void {
        manager.removeConnector("anyRef", null);
      };
      expect(doRemoveConnector).to.throw(JcadContextError);
    });
  });
});
