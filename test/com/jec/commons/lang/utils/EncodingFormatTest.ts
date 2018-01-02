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
import {EncodingFormat} from "../../../../../../src/com/jec/commons/lang/utils/EncodingFormat";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/EncodingFormatTestUtils";

// Test:
describe("EncodingFormat", ()=> {

  describe("#UTF8", ()=> {
    it("UTF8 should return 'utf8'", function() {
      expect(EncodingFormat.UTF8).to.equal(utils.UTF8);
    });
  });

  describe("#ASCII", ()=> {
    it("ASCII should return 'ascii'", function() {
      expect(EncodingFormat.ASCII).to.equal(utils.ASCII);
    });
  });

  describe("#LATIN1", ()=> {
    it("LATIN1 should return 'latin1'", function() {
      expect(EncodingFormat.LATIN1).to.equal(utils.LATIN1);
    });
  });

  describe("#BASE64", ()=> {
    it("BASE64 should return 'base64'", function() {
      expect(EncodingFormat.BASE64).to.equal(utils.BASE64);
    });
  });

  describe("#HEX", ()=> {
    it("HEX should return 'hex'", function() {
      expect(EncodingFormat.HEX).to.equal(utils.HEX);
    });
  });
});
