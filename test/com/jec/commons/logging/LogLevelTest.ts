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

// Test:
describe("LogLevel", ()=> {

  describe("#TRACE", ()=> {
    it("TRACE should return '0'", function() {
      expect(LogLevel.TRACE).to.equal(TRACE);
    });
  });

  describe("#DEBUG", ()=> {
    it("DEBUG should return '1'", function() {
      expect(LogLevel.DEBUG).to.equal(DEBUG);
    });
  });
  
  describe("#INFO", ()=> {
    it("INFO should return '2'", function() {
      expect(LogLevel.INFO).to.equal(INFO);
    });
  });
  
  describe("#WARN", ()=> {
    it("WARN should return '3'", function() {
      expect(LogLevel.WARN).to.equal(WARN);
    });
  });
  
  describe("#ERROR", ()=> {
    it("ERROR should return '4'", function() {
      expect(LogLevel.ERROR).to.equal(ERROR);
    });
  });

  describe("#OFF", ()=> {
    it("OFF should return '5'", function() {
      expect(LogLevel.OFF).to.equal(OFF);
    });
  });
});

// Utilities:
// We store constants that should be defined by the LogLevel class:
const TRACE:number = 0;
const DEBUG:number = 1;
const INFO:number = 2;
const WARN:number = 3;
const ERROR:number = 4;
const OFF:number = 5;