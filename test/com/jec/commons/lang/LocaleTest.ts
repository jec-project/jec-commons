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
import {expect, assert} from "chai";

// Class to test:
import {Locale} from "../../../../../src/com/jec/commons/lang/Locale";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/LocaleTestUtils";

// Test:
describe("Locale", ()=> {

  describe("#getLanguage()", ()=> {

    it("should return 'null' by default", function() {
      const locale:Locale = new Locale();
      expect(locale.getLanguage()).to.be.null;
    });
  
    it("should return the value defined by the #setLanguage() method", function() {
      const locale:Locale = new Locale();
      locale.setLanguage(utils.LANGUAGE);
      expect(locale.getLanguage()).to.equal(utils.LANGUAGE);
    });
  });

  describe("#getRegion()", ()=> {

    it("should return 'null' by default", function() {
      const locale:Locale = new Locale();
      expect(locale.getRegion()).to.be.null;
    });

    it("should return the value defined by the #setRegion() method", function() {
      const locale:Locale = new Locale();
      locale.setRegion(utils.REGION);
      expect(locale.getRegion()).to.equal(utils.REGION);
    });
  });

  describe("#getScript()", ()=> {

    it("should return 'null' by default", function() {
      const locale:Locale = new Locale();
      expect(locale.getScript()).to.be.null;
    });

    it("should return the value defined by the #setScript() method", function() {
      const locale:Locale = new Locale();
      locale.setScript(utils.SCRIPT);
      expect(locale.getScript()).to.equal(utils.SCRIPT);
    });
  });
});