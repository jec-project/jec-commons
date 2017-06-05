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

// Class to test:
import {LogLevel} from "../../../../../src/com/jec/commons/logging/LogLevel";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/LogLevelTestUtils";

// Test:
describe("LogLevel", ()=> {

  describe("#TRACE", ()=> {
    it("TRACE should return '0'", function() {
      expect(LogLevel.TRACE).to.equal(utils.TRACE);
    });
  });

  describe("#DEBUG", ()=> {
    it("DEBUG should return '1'", function() {
      expect(LogLevel.DEBUG).to.equal(utils.DEBUG);
    });
  });
  
  describe("#INFO", ()=> {
    it("INFO should return '2'", function() {
      expect(LogLevel.INFO).to.equal(utils.INFO);
    });
  });
  
  describe("#WARN", ()=> {
    it("WARN should return '3'", function() {
      expect(LogLevel.WARN).to.equal(utils.WARN);
    });
  });
  
  describe("#ERROR", ()=> {
    it("ERROR should return '4'", function() {
      expect(LogLevel.ERROR).to.equal(utils.ERROR);
    });
  });

  describe("#OFF", ()=> {
    it("OFF should return '5'", function() {
      expect(LogLevel.OFF).to.equal(utils.OFF);
    });
  });
});
