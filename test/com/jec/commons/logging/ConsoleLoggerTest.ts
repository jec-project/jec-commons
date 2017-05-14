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

const expect = chai.expect;
chai.use(spies);

// Class to test:
import {ConsoleLogger} from "../../../../../src/com/jec/commons/logging/ConsoleLogger";

// Test:
describe("ConsoleLogger", ()=> {

  describe("#trace()", ()=> {
    it("should output a log message in the console", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let spy:any = chai.spy.on(console, "log");
      logger.trace(MESSAGE, CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let oldLog:any = console.log;
      logger.trace(MESSAGE, CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.TRACE);
          expect(message).to.have.string(CONTEXT);
          expect(message).to.have.string(MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });

  describe("#info()", ()=> {
    it("should output a log message in the console", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let spy:any = chai.spy.on(console, "log");
      logger.info(MESSAGE, CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let oldLog:any = console.log;
      logger.info(MESSAGE, CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.INFO);
          expect(message).to.have.string(CONTEXT);
          expect(message).to.have.string(MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });

  describe("#debug()", ()=> {
    it("should output a log message in the console", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let spy:any = chai.spy.on(console, "log");
      logger.debug(MESSAGE, CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let oldLog:any = console.log;
      logger.debug(MESSAGE, CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.DEBUG);
          expect(message).to.have.string(CONTEXT);
          expect(message).to.have.string(MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#warn()", ()=> {
    it("should output a log message in the console", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let spy:any = chai.spy.on(console, "log");
      logger.warn(MESSAGE, CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let oldLog:any = console.log;
      logger.warn(MESSAGE, CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.WARN);
          expect(message).to.have.string(CONTEXT);
          expect(message).to.have.string(MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
  
  describe("#error()", ()=> {
    it("should output a log message in the console", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let spy:any = chai.spy.on(console, "log");
      logger.error(MESSAGE, CONTEXT);
      expect(spy).to.have.been.called();
    });

    it("should output a well formatted log message", function() {
      let logger:ConsoleLogger = new ConsoleLogger();
      let oldLog:any = console.log;
      logger.error(MESSAGE, CONTEXT);
      console.log = function (message) {
          expect(message).to.have.string(LogLevelUtil.ERROR);
          expect(message).to.have.string(CONTEXT);
          expect(message).to.have.string(MESSAGE);
          oldLog.apply(console, arguments);
      };
      console.log = oldLog;
    });
  });
});

// Utilities:
const MESSAGE:string = "message";
const CONTEXT:string = "[CONTEXT]";