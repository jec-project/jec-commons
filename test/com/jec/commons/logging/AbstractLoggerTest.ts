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
import {LogLevel} from "../../../../../src/com/jec/commons/logging/LogLevel";

// Class to test:
import {AbstractLogger} from "../../../../../src/com/jec/commons/logging/AbstractLogger";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/AbstractLoggerTestUtils";

// Chai declarations:
const expect = chai.expect;
chai.use(spies);

// Test:
describe("AbstractLogger", ()=> {

  describe("#getLogLevel()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should retrieve the same value as passed to the setLogLevel() method", function() {
      logger.setLogLevel(LogLevel.ERROR);
      expect(logger.getLogLevel()).to.equal(LogLevel.ERROR);
    });
  });
  
  describe("#getName()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should retrieve the same value as passed to the setName() method", function() {
      logger.setName(utils.NAME);
      expect(logger.getName()).to.equal(utils.NAME);
    });
  });

  describe("#debug()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be called with the specified parameter", function() {
      let spy:any = chai.spy.on(logger, "debug");
      logger.debug(utils.MESSAGE);
      expect(spy).to.have.been.called.with(utils.MESSAGE);
    });
  });
  
  describe("#error()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be called with the specified parameter", function() {
      let spy:any = chai.spy.on(logger, "error");
      logger.error(utils.MESSAGE);
      expect(spy).to.have.been.called.with(utils.MESSAGE);
    });
  });
  
  describe("#info()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be called with the specified parameter", function() {
      let spy:any = chai.spy.on(logger, "info");
      logger.info(utils.MESSAGE);
      expect(spy).to.have.been.called.with(utils.MESSAGE);
    });
  });
  
  describe("#trace()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be called with the specified parameter", function() {
      let spy:any = chai.spy.on(logger, "trace");
      logger.trace(utils.MESSAGE);
      expect(spy).to.have.been.called.with(utils.MESSAGE);
    });
  });
  
  describe("#warn()", ()=> {
    let logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be called with the specified parameter", function() {
      let spy:any = chai.spy.on(logger, "warn");
      logger.warn(utils.MESSAGE);
      expect(spy).to.have.been.called.with(utils.MESSAGE);
    });
  });
});
