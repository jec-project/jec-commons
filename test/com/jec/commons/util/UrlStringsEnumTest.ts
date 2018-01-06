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
import {UrlStringsEnum} from "../../../../../src/com/jec/commons/util/UrlStringsEnum";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/UrlStringsEnumTestUtils";

// Test:
describe("UrlStringsEnum", ()=> {

  describe("#PERM_MARK", ()=> {
    it("PERM_MARK should return '/*'", function() {
      expect(UrlStringsEnum.PERM_MARK).to.equal(utils.PERM_MARK);
    });
  });

  describe("#ASTERISK", ()=> {
    it("ASTERISK should return '*'", function() {
      expect(UrlStringsEnum.ASTERISK).to.equal(utils.ASTERISK);
    });
  });

  describe("#MARK", ()=> {
    it("MARK should return '?'", function() {
      expect(UrlStringsEnum.MARK).to.equal(utils.MARK);
    });
  });

  describe("#ANCHOR", ()=> {
    it("ANCHOR should return '#'", function() {
      expect(UrlStringsEnum.ANCHOR).to.equal(utils.ANCHOR);
    });
  });

  describe("#SLASH", ()=> {
    it("SLASH should return '/'", function() {
      expect(UrlStringsEnum.SLASH).to.equal(utils.SLASH);
    });
  });

  describe("#SCHEME_DELIMITER", ()=> {
    it("SCHEME_DELIMITER should return '://'", function() {
      expect(UrlStringsEnum.SCHEME_DELIMITER).to.equal(utils.SCHEME_DELIMITER);
    });
  });

  describe("#COLON", ()=> {
    it("COLON should return ':'", function() {
      expect(UrlStringsEnum.COLON).to.equal(utils.COLON);
    });
  });

  describe("#DOT", ()=> {
    it("DOT should return '.'", function() {
      expect(UrlStringsEnum.DOT).to.equal(utils.DOT);
    });
  });

  describe("#EMPTY_STRING", ()=> {
    it("EMPTY_STRING should return an empty string", function() {
      expect(UrlStringsEnum.EMPTY_STRING).to.equal(utils.EMPTY_STRING);
    });
  });

  describe("#RELATIVE_PATH", ()=> {
    it("RELATIVE_PATH should return '../'", function() {
      expect(UrlStringsEnum.RELATIVE_PATH).to.equal(utils.RELATIVE_PATH);
    });
  });
});
