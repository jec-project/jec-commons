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
import {InspectMode} from "../../../../../../../src/com/jec/commons/files/reflect/utils/InspectMode";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/InspectModeTestUtils";

// Test:
describe("InspectMode", ()=> {

  describe("#NONE", ()=> {
    it("NONE should return 0", function() {
      expect(InspectMode.NONE).to.equal(utils.NONE);
    });
  });

  describe("#FILL_CACHE", ()=> {
    it("FILL_CACHE should return 1", function() {
      expect(InspectMode.FILL_CACHE).to.equal(utils.FILL_CACHE);
    });
  });

  describe("#READ_CACHE", ()=> {
    it("READ_CACHE should return 2", function() {
      expect(InspectMode.READ_CACHE).to.equal(utils.READ_CACHE);
    });
  });
});
