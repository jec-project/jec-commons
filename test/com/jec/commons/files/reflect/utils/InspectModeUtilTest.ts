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
import {InspectMode} from "../../../../../../../src/com/jec/commons/files/reflect/utils/InspectMode";

// Class to test:
import {InspectModeUtil} from "../../../../../../../src/com/jec/commons/files/reflect/utils/InspectModeUtil";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/InspectModeUtilTestUtils";

// Test:
describe("InspectModeUtil", ()=> {

  describe("#NONE", ()=> {
    it("NONE should return 'NONE'", function() {
      expect(InspectModeUtil.NONE).to.equal(utils.NONE);
    });
  });

  describe("#FILL_CACHE", ()=> {
    it("FILL_CACHE should return 'FILL_CACHE'", function() {
      expect(InspectModeUtil.FILL_CACHE).to.equal(utils.FILL_CACHE);
    });
  });
  
  describe("#READ_CACHE", ()=> {
    it("READ_CACHE should return 'READ_CACHE'", function() {
      expect(InspectModeUtil.READ_CACHE).to.equal(utils.READ_CACHE);
    });
  });
  
  describe("#stringToInspectMode()", ()=> {

    const util:InspectModeUtil = new InspectModeUtil();

    it("stringToInspectMode(InspectModeUtil.NONE) should return InspectMode.NONE", function() {
      expect(util.stringToInspectMode(InspectModeUtil.NONE)).to.equal(InspectMode.NONE);
    });

    it("stringToInspectMode(InspectModeUtil.READ_CACHE) should return InspectMode.READ_CACHE", function() {
      expect(util.stringToInspectMode(InspectModeUtil.READ_CACHE)).to.equal(InspectMode.READ_CACHE);
    });

    it("stringToInspectMode(InspectModeUtil.FILL_CACHE) should return InspectMode.FILL_CACHE", function() {
      expect(util.stringToInspectMode(InspectModeUtil.FILL_CACHE)).to.equal(InspectMode.FILL_CACHE);
    });
  });

  describe("#inspectModeToString()", ()=> {
    
    const util:InspectModeUtil = new InspectModeUtil();

    it("inspectModeToString(InspectMode.NONE) should return InspectModeUtil.NONE", function() {
      expect(util.inspectModeToString(InspectMode.NONE)).to.equal(InspectModeUtil.NONE);
    });

    it("inspectModeToString(InspectMode.READ_CACHE) should return InspectModeUtil.READ_CACHE", function() {
      expect(util.inspectModeToString(InspectMode.READ_CACHE)).to.equal(InspectModeUtil.READ_CACHE);
    });

    it("inspectModeToString(InspectMode.FILL_CACHE) should return InspectModeUtil.FILL_CACHE", function() {
      expect(util.inspectModeToString(InspectMode.FILL_CACHE)).to.equal(InspectModeUtil.FILL_CACHE);
    });
  });
});
