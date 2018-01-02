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
import {LocaleBuilder} from "../../../../../../src/com/jec/commons/lang/utils/LocaleBuilder";
import {Locale} from "../../../../../../src/com/jec/commons/lang/Locale";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/LocaleTestUtils";

// Test:
describe("LocaleBuilder", ()=> {

  describe("#build()", ()=> {

    it("should return a different 'Locale' instance each time", function() {
      let builder:LocaleBuilder = new LocaleBuilder();
      let locale1:Locale = builder.build();
      let locale2:Locale = builder.build();
      expect(locale1).to.not.equal(locale2);
    });

    it("should return a 'Locale' with empty properties", function() {

      let builder:LocaleBuilder = new LocaleBuilder();
      let locale:Locale = builder.build();
      expect(locale.getLanguage()).to.be.null;
      expect(locale.getRegion()).to.be.null;
      expect(locale.getScript()).to.be.null;
    });

    it("should return a 'Locale' with the correct properties", function() {
      let builder:LocaleBuilder = new LocaleBuilder();
      let locale:Locale = builder.setLanguage(utils.LANGUAGE)
                                 .setRegion(utils.REGION)
                                 .setScript(utils.SCRIPT)
                                 .build();
      expect(locale.getLanguage()).to.equal(utils.LANGUAGE);
      expect(locale.getRegion()).to.equal(utils.REGION);
      expect(locale.getScript()).to.equal(utils.SCRIPT);
    });
  });

  describe("#clear()", ()=> {

    it("should reset all properties", function() {
      let builder:LocaleBuilder = new LocaleBuilder();
      builder.setLanguage(utils.LANGUAGE)
             .setRegion(utils.REGION)
             .setScript(utils.SCRIPT);
      builder.clear();
      let locale:Locale = builder.build();
      expect(locale.getLanguage()).to.be.null;
      expect(locale.getRegion()).to.be.null;
      expect(locale.getScript()).to.be.null;
    });
  });
});
