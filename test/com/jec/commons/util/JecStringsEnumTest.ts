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
import {JecStringsEnum} from "../../../../../src/com/jec/commons/util/JecStringsEnum";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/JecStringsEnumTestUtils";

// Test:
describe("JecStringsEnum", ()=> {

  describe("#SRC", ()=> {
    it("SRC should return '/src/'", function() {
      expect(JecStringsEnum.SRC).to.equal(utils.SRC);
    });
  });

  describe("#WEB_APP", ()=> {
    it("WEB_APP should return '/webapp/'", function() {
      expect(JecStringsEnum.WEB_APP).to.equal(utils.WEB_APP);
    });
  });

  describe("#TS_EXTENSION", ()=> {
    it("TS_EXTENSION should return 'ts'", function() {
      expect(JecStringsEnum.TS_EXTENSION).to.equal(utils.TS_EXTENSION);
    });
  });

  describe("#JS_EXTENSION", ()=> {
    it("JS_EXTENSION should return 'js'", function() {
      expect(JecStringsEnum.JS_EXTENSION).to.equal(utils.JS_EXTENSION);
    });
  });
});
