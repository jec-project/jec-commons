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
import * as chai from "chai";
import * as spies from "chai-spies";
import {LogLevelUtil} from "../../../../../src/com/jec/commons/logging/LogLevelUtil";

// Class to test:
import {ConsoleLogger} from "../../../../../src/com/jec/commons/logging/ConsoleLogger";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/ConsoleLoggerTestUtils";

// Chai declarations:
const expect = chai.expect;
chai.use(spies);

// Test:
describe("ConsoleLogger", ()=> {

  let logger:ConsoleLogger = null;

  beforeEach(()=> {
    logger = new ConsoleLogger();
  });

  afterEach(()=> {
    logger = null;
  });

  describe("#trace()", ()=> {
    it("should output a log message in the console", function() {
      let spy:any = chai.spy.on(console, "log");
      logger.trace(utils.MESSAGE, utils.CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let oldLog:any = console.log;
      logger.trace(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.TRACE);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });

  describe("#info()", ()=> {
    it("should output a log message in the console", function() {
      let spy:any = chai.spy.on(console, "log");
      logger.info(utils.MESSAGE, utils.CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let oldLog:any = console.log;
      logger.info(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.INFO);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });

  describe("#debug()", ()=> {
    it("should output a log message in the console", function() {
      let spy:any = chai.spy.on(console, "log");
      logger.debug(utils.MESSAGE, utils.CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let oldLog:any = console.log;
      logger.debug(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.DEBUG);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#warn()", ()=> {
    it("should output a log message in the console", function() {
      let spy:any = chai.spy.on(console, "log");
      logger.warn(utils.MESSAGE, utils.CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let oldLog:any = console.log;
      logger.warn(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.WARN);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#error()", ()=> {
    it("should output a log message in the console", function() {
      let spy:any = chai.spy.on(console, "log");
      logger.error(utils.MESSAGE, utils.CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let oldLog:any = console.log;
      logger.error(utils.MESSAGE, utils.CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.ERROR);
          expect(message).to.have.string(utils.CONTEXT);
          expect(message).to.have.string(utils.MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
});
