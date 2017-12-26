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
import {LogLevelString} from "../../../../../../src/com/jec/commons/logging/utils/LogLevelString";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/LogLevelUtilTestUtils";

// Test:
describe("LogLevelString", ()=> {

  describe("#TRACE", ()=> {
    it("TRACE should return 'TRACE'", function() {
      expect(LogLevelString.TRACE).to.equal(utils.TRACE);
    });
  });

  describe("#DEBUG", ()=> {
    it("DEBUG should return 'DEBUG'", function() {
      expect(LogLevelString.DEBUG).to.equal(utils.DEBUG);
    });
  });
  
  describe("#INFO", ()=> {
    it("INFO should return 'INFO'", function() {
      expect(LogLevelString.INFO).to.equal(utils.INFO);
    });
  });
  
  describe("#WARN", ()=> {
    it("WARN should return 'WARN'", function() {
      expect(LogLevelString.WARN).to.equal(utils.WARN);
    });
  });
  
  describe("#ERROR", ()=> {
    it("ERROR should return 'ERROR'", function() {
      expect(LogLevelString.ERROR).to.equal(utils.ERROR);
    });
  });
});
