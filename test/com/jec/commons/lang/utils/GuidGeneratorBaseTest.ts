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
import {GuidGenerator} from "../../../../../../src/com/jec/commons/lang/GuidGenerator";

// Class to test:
import {GuidGeneratorBase} from "../../../../../../src/com/jec/commons/lang/utils/GuidGeneratorBase";

// Utilities:
import {GuidTestUtils} from "../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("GuidGenerator", ()=> {

  describe("#generate", ()=> {
    it("should return a valid GUID V4", function() {
      let generator:GuidGenerator = new GuidGeneratorBase();
      let guid:string = generator.generate();
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });

    it("should a unique GUID each time", function() {
      let generator:GuidGenerator = new GuidGeneratorBase();
      let guid1:string = generator.generate();
      let guid2:string = generator.generate();
      expect(guid1).to.not.equal(guid2);
    });
  });

  
});