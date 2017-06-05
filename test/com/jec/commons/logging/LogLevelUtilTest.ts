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
import {LogLevel} from "../../../../../src/com/jec/commons/logging/LogLevel";

// Class to test:
import {LogLevelUtil} from "../../../../../src/com/jec/commons/logging/LogLevelUtil";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/LogLevelUtilTestUtils";

// Test:
describe("LogLevelUtil", ()=> {

  describe("#TRACE", ()=> {
    it("TRACE should return 'TRACE'", function() {
      expect(LogLevelUtil.TRACE).to.equal(utils.TRACE);
    });
  });

  describe("#DEBUG", ()=> {
    it("DEBUG should return 'DEBUG'", function() {
      expect(LogLevelUtil.DEBUG).to.equal(utils.DEBUG);
    });
  });
  
  describe("#INFO", ()=> {
    it("INFO should return 'INFO'", function() {
      expect(LogLevelUtil.INFO).to.equal(utils.INFO);
    });
  });
  
  describe("#WARN", ()=> {
    it("WARN should return 'WARN'", function() {
      expect(LogLevelUtil.WARN).to.equal(utils.WARN);
    });
  });
  
  describe("#ERROR", ()=> {
    it("ERROR should return 'ERROR'", function() {
      expect(LogLevelUtil.ERROR).to.equal(utils.ERROR);
    });
  });

  describe("#stringTogLevel()", ()=> {

    let util:LogLevelUtil = new LogLevelUtil();

    it("stringTogLevel(LogLevelUtil.TRACE) should return LogLevel.TRACE", function() {
      expect(util.stringTogLevel(LogLevelUtil.TRACE)).to.equal(LogLevel.TRACE);
    });

    it("stringTogLevel(LogLevelUtil.DEBUG) should return LogLevel.DEBUG", function() {
      expect(util.stringTogLevel(LogLevelUtil.DEBUG)).to.equal(LogLevel.DEBUG);
    });

    it("stringTogLevel(LogLevelUtil.INFO) should return LogLevel.INFO", function() {
      expect(util.stringTogLevel(LogLevelUtil.INFO)).to.equal(LogLevel.INFO);
    });

    it("stringTogLevel(LogLevelUtil.WARN) should return LogLevel.WARN", function() {
      expect(util.stringTogLevel(LogLevelUtil.WARN)).to.equal(LogLevel.WARN);
    });

    it("stringTogLevel(LogLevelUtil.ERROR) should return LogLevel.ERROR", function() {
      expect(util.stringTogLevel(LogLevelUtil.ERROR)).to.equal(LogLevel.ERROR);
    });
  });

  describe("#logLevelToString()", ()=> {
    let util:LogLevelUtil = new LogLevelUtil();

    it("logLevelToString(LogLevel.ERROR) should return LogLevelUtil.ERROR", function() {
      expect(util.logLevelToString(LogLevel.ERROR)).to.equal(LogLevelUtil.ERROR);
    });

    it("logLevelToString(LogLevel.DEBUG) should return LogLevelUtil.DEBUG", function() {
      expect(util.logLevelToString(LogLevel.DEBUG)).to.equal(LogLevelUtil.DEBUG);
    });

    it("logLevelToString(LogLevel.INFO) should return LogLevelUtil.INFO", function() {
      expect(util.logLevelToString(LogLevel.INFO)).to.equal(LogLevelUtil.INFO);
    });

    it("logLevelToString(LogLevel.WARN) should return LogLevelUtil.WARN", function() {
      expect(util.logLevelToString(LogLevel.WARN)).to.equal(LogLevelUtil.WARN);
    });

    it("logLevelToString(LogLevel.ERROR) should return LogLevelUtil.ERROR", function() {
      expect(util.logLevelToString(LogLevel.ERROR)).to.equal(LogLevelUtil.ERROR);
    });
  });
});
