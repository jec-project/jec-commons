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
import {expect} from "chai";
import {LogLevel} from "../../../../../../src/com/jec/commons/logging/LogLevel";

// Class to test:
import {LogLevelUtil} from "../../../../../../src/com/jec/commons/logging/utils/LogLevelUtil";
import {LogLevelString} from "../../../../../../src/com/jec/commons/logging/utils/LogLevelString";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/LogLevelUtilTestUtils";

// Test:
describe("LogLevelUtil", ()=> {

  describe("#stringTogLevel()", ()=> {

    let util:LogLevelUtil = new LogLevelUtil();

    it("stringTogLevel(LogLevelString.TRACE) should return LogLevel.TRACE", function() {
      expect(util.stringTogLevel(LogLevelString.TRACE)).to.equal(LogLevel.TRACE);
    });

    it("stringTogLevel(LogLevelString.DEBUG) should return LogLevel.DEBUG", function() {
      expect(util.stringTogLevel(LogLevelString.DEBUG)).to.equal(LogLevel.DEBUG);
    });

    it("stringTogLevel(LogLevelString.INFO) should return LogLevel.INFO", function() {
      expect(util.stringTogLevel(LogLevelString.INFO)).to.equal(LogLevel.INFO);
    });

    it("stringTogLevel(LogLevelString.WARN) should return LogLevel.WARN", function() {
      expect(util.stringTogLevel(LogLevelString.WARN)).to.equal(LogLevel.WARN);
    });

    it("stringTogLevel(LogLevelString.ERROR) should return LogLevel.ERROR", function() {
      expect(util.stringTogLevel(LogLevelString.ERROR)).to.equal(LogLevel.ERROR);
    });
  });

  describe("#logLevelToString()", ()=> {
    let util:LogLevelUtil = new LogLevelUtil();

    it("logLevelToString(LogLevel.ERROR) should return LogLevelString.ERROR", function() {
      expect(util.logLevelToString(LogLevel.ERROR)).to.equal(LogLevelString.ERROR);
    });

    it("logLevelToString(LogLevel.DEBUG) should return LogLevelString.DEBUG", function() {
      expect(util.logLevelToString(LogLevel.DEBUG)).to.equal(LogLevelString.DEBUG);
    });

    it("logLevelToString(LogLevel.INFO) should return LogLevelString.INFO", function() {
      expect(util.logLevelToString(LogLevel.INFO)).to.equal(LogLevelString.INFO);
    });

    it("logLevelToString(LogLevel.WARN) should return LogLevelString.WARN", function() {
      expect(util.logLevelToString(LogLevel.WARN)).to.equal(LogLevelString.WARN);
    });

    it("logLevelToString(LogLevel.ERROR) should return LogLevelString.ERROR", function() {
      expect(util.logLevelToString(LogLevel.ERROR)).to.equal(LogLevelString.ERROR);
    });
  });
});
