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
import {LogLevelUtil} from "../../../../../src/com/jec/commons/logging/LogLevelUtil";
import * as moment from "moment";

// Class to test:
import {DefaultLogFormatter} from "../../../../../src/com/jec/commons/logging/DefaultLogFormatter";

// Test:
describe("DefaultLogFormatter", ()=> {

  describe("#format()", ()=> {
    it("should return a well formatted log message", function() {
      let logLevelUtil:LogLevelUtil = new LogLevelUtil();
      let level:string = logLevelUtil.logLevelToString(LogLevel.INFO);
      let formatter:DefaultLogFormatter = new DefaultLogFormatter();
      formatter.timeFormat = TIME_FORMAT;
      expect(
        formatter.format(level, MESSAGE, false, CONTEXT)
      ).to.equal(buildExpectedMessage(level));
    });
  });

});

// Utilities:
const TIME_FORMAT:string = "MM/DD/YY";
const MESSAGE:string = "message";
const CONTEXT:string = "[CONTEXT]";
const buildExpectedMessage = function(level:string):string {
  let time:string =  moment().format(TIME_FORMAT);
  let result:string = `[${time}]${CONTEXT} ${level}: ${MESSAGE}`;
  return result;
}