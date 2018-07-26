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
import * as sinon from "sinon";
import {LogLevelString} from "../../../../../src/com/jec/commons/logging/utils/LogLevelString";

// Class to test:
import {ConsoleLogger} from "../../../../../src/com/jec/commons/logging/ConsoleLogger";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/ConsoleLoggerTestUtils";

// Chai declarations:
const expect: any = chai.expect;

// Test:
describe("ConsoleLogger", ()=> {

  let logger:ConsoleLogger = null;
  let logSpy:any = null;

  beforeEach(()=> {
    logger = new ConsoleLogger();
    logSpy = sinon.spy(console, "log");
  });

  afterEach(()=> {
    logger = null;
    sinon.restore();
  });

  describe("#trace()", ()=> {
    it("should output a log message in the console", function() {
      logger.trace(utils.MESSAGE, utils.CONTEXT);
      sinon.assert.calledOnce(logSpy);
    });

    it("should output a well formatted log message", function() {
      const oldLog:any = console.log;
      logger.trace(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelString.TRACE);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });

  describe("#info()", ()=> {
    it("should output a log message in the console", function() {
      logger.info(utils.MESSAGE, utils.CONTEXT);
      sinon.assert.calledOnce(logSpy);
    });

    it("should output a well formatted log message", function() {
      const oldLog:any = console.log;
      logger.info(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelString.INFO);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });

  describe("#debug()", ()=> {
    it("should output a log message in the console", function() {
      logger.debug(utils.MESSAGE, utils.CONTEXT);
      sinon.assert.calledOnce(logSpy);
    });

    it("should output a well formatted log message", function() {
      const oldLog:any = console.log;
      logger.debug(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelString.DEBUG);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#warn()", ()=> {
    it("should output a log message in the console", function() {;
      logger.warn(utils.MESSAGE, utils.CONTEXT);
      sinon.assert.calledOnce(logSpy);
    });

    it("should output a well formatted log message", function() {
      const oldLog:any = console.log;
      logger.warn(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelString.WARN);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#error()", ()=> {
    it("should output a log message in the console", function() {
      logger.error(utils.MESSAGE, utils.CONTEXT);
      sinon.assert.calledOnce(logSpy);
    });

    it("should output a well formatted log message", function() {
      const oldLog:any = console.log;
      logger.error(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelString.ERROR);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#always()", ()=> {
    it("should output a log message in the console", function() {
      logger.always(utils.MESSAGE, utils.CONTEXT);
      sinon.assert.calledOnce(logSpy);
    });

    it("should output a well formatted log message", function() {
      const oldLog:any = console.log;
      logger.always(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelString.ALWAYS);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
});
