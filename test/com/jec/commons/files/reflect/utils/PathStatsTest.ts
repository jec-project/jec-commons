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

// Class to test:
import {PathStats} from "../../../../../../../src/com/jec/commons/files/reflect/utils/PathStats";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/PathStatsTestUtils";

// Test:
describe("PathStats", ()=> {

  const stats:PathStats = new PathStats(utils.VALID_PATH);

  it("should have a 'directoriesNum' property", function() {
    expect(stats).to.have.property("directoriesNum", 0);
  });

  it("should have a 'filesNum' property", function() {
    expect(stats).to.have.property("filesNum", 0);
  });

  it("should have a 'processedFilesNum' property", function() {
    expect(stats).to.have.property("processedFilesNum", 0);
  });

  describe("#getPath()", ()=> {
    it("should retreive the same property as passed to the constructor function", function() {
      expect(stats.getPath()).to.equal(utils.VALID_PATH);
    });
  });
});