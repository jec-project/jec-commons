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
import {Logger} from "../../../../../../src/com/jec/commons/logging/Logger";
import {ConsoleLogger} from "../../../../../../src/com/jec/commons/logging/ConsoleLogger";

// Class to test:
import {AbstractLoggerProxy} from "../../../../../../src/com/jec/commons/logging/proxy/AbstractLoggerProxy";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/AbstractLoggerProxyTestUtils";

// Chai declarations:
const expect = chai.expect;

// Test:
describe("AbstractLoggerProxy", ()=> {

  describe("#getLogContext()", ()=> {
    it("should return the specified context", function() {
      const loggerProxy:AbstractLoggerProxy = utils.buildAbstractLoggerProxy();
      expect(loggerProxy.getLogContext()).to.equal(utils.LOG_CONTEXT);
    });
  });
  
  describe("#getLogger()", ()=> {
    it("should retrieve the same value as passed to the setLogger() method", function() {
      const loggerProxy:AbstractLoggerProxy = utils.buildAbstractLoggerProxy();
      const logger:Logger = new ConsoleLogger();
      loggerProxy.setLogger(logger);
      expect(loggerProxy.getLogger()).to.equal(logger);
    });
  });
  
  describe("#log()", ()=> {
    it("should be defined in the abstract class", function() {
      const loggerProxy:AbstractLoggerProxy = utils.buildAbstractLoggerProxy();
      expect(loggerProxy).to.have.property("log");
      expect(loggerProxy.log).to.be.a("function");
    });
  });
});
