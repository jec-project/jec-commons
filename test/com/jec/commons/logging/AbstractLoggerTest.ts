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
import {LogLevel} from "../../../../../src/com/jec/commons/logging/LogLevel";

// Class to test:
import {AbstractLogger} from "../../../../../src/com/jec/commons/logging/AbstractLogger";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/AbstractLoggerTestUtils";

// Chai declarations:
const expect: any = chai.expect;

// Test:
describe("AbstractLogger", ()=> {

  describe("#getLogLevel()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should retrieve the same value as passed to the setLogLevel() method", function() {
      logger.setLogLevel(LogLevel.ERROR);
      expect(logger.getLogLevel()).to.equal(LogLevel.ERROR);
    });
  });
  
  describe("#getName()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should retrieve the same value as passed to the setName() method", function() {
      logger.setName(utils.NAME);
      expect(logger.getName()).to.equal(utils.NAME);
    });
  });

  describe("#debug()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be defined in the abstract class", function() {
      expect(logger).to.have.property("debug");
      expect(logger.debug).to.be.a("function");
    });
  });
  
  describe("#error()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be defined in the abstract class", function() {
      expect(logger).to.have.property("error");
      expect(logger.error).to.be.a("function");
    });
  });
  
  describe("#info()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be defined in the abstract class", function() {
      expect(logger).to.have.property("info");
      expect(logger.info).to.be.a("function");
    });
  });
  
  describe("#trace()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be defined in the abstract class", function() {
      expect(logger).to.have.property("trace");
      expect(logger.trace).to.be.a("function");
    });
  });
  
  describe("#warn()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be defined in the abstract class", function() {
      expect(logger).to.have.property("warn");
      expect(logger.warn).to.be.a("function");
    });
  });
  
  describe("#always()", ()=> {
    const logger:AbstractLogger = utils.buildAbstractLogger();
    it("should be defined in the abstract class", function() {
      expect(logger).to.have.property("always");
    });
  });
});
