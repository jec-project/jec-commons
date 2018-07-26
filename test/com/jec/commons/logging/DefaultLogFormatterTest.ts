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
import {expect} from "chai";
import {LogLevel} from "../../../../../src/com/jec/commons/logging/LogLevel";
import {LogLevelUtil} from "../../../../../src/com/jec/commons/logging/utils/LogLevelUtil";
import {LogLevelString} from "../../../../../src/com/jec/commons/logging/utils/LogLevelString";

// Class to test:
import {DefaultLogFormatter} from "../../../../../src/com/jec/commons/logging/DefaultLogFormatter";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/DefaultLogFormatterTestUtils";

// Test:
describe("DefaultLogFormatter", ()=> {

  describe("#format()", ()=> {
    it("should return a well formatted log message", function() {
      const logLevelUtil:LogLevelUtil = new LogLevelUtil();
      const level:LogLevelString = logLevelUtil.logLevelToString(LogLevel.INFO);
      const formatter:DefaultLogFormatter = new DefaultLogFormatter();
      formatter.timeFormat = utils.TIME_FORMAT;
      expect(
        formatter.format(level, utils.MESSAGE, false, utils.CONTEXT)
      ).to.equal(utils.buildExpectedMessage(level));
    });
  });

});
