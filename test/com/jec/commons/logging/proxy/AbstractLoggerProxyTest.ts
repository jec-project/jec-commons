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
import {Logger} from "../../../../../../src/com/jec/commons/logging/Logger";
import {ConsoleLogger} from "../../../../../../src/com/jec/commons/logging/ConsoleLogger";

// Class to test:
import {AbstractLoggerProxy} from "../../../../../../src/com/jec/commons/logging/proxy/AbstractLoggerProxy";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/AbstractLoggerProxyTestUtils";

// Chai declarations:
const expect = chai.expect;
chai.use(spies);

// Test:
describe("AbstractLoggerProxy", ()=> {

  describe("#getLogContext()", ()=> {
    let loggerProxy:AbstractLoggerProxy = utils.buildAbstractLoggerProxy();
    it("should return the specified context", function() {
      expect(loggerProxy.getLogContext()).to.equal(utils.LOG_CONTEXT);
    });
  });
  
  describe("#getLogger()", ()=> {
    let loggerProxy:AbstractLoggerProxy = utils.buildAbstractLoggerProxy();
    let logger:Logger = new ConsoleLogger();
    it("should retrieve the same value as passed to the setLogger() method", function() {
      loggerProxy.setLogger(logger);
      expect(loggerProxy.getLogger()).to.equal(logger);
    });
  });
  
  describe("#log()", ()=> {
    let loggerProxy:AbstractLoggerProxy = utils.buildAbstractLoggerProxy();
    it("should be called with the specified parameters", function() {
      let spy:any = chai.spy.on(loggerProxy, "log");
      loggerProxy.log(utils.MESSAGE, null);
      expect(spy).to.have.been.called.with(utils.MESSAGE, null);
    });
  });
});
