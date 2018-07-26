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
import {GuidGenerator} from "../../../../../../src/com/jec/commons/lang/GuidGenerator";
import {SingletonError} from "../../../../../../src/com/jec/commons/exceptions/SingletonError";

// Class to test:
import {GlobalGuidGenerator} from "../../../../../../src/com/jec/commons/lang/utils/GlobalGuidGenerator";

// Utilities:
import {GuidTestUtils} from "../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("GlobalGuidGenerator", ()=> {

  describe("#singleton()", ()=> {

    it("should throw a singleton error when calling the constructor function", function() {
      const buildInstance:Function = function():void {
        new GlobalGuidGenerator();
      };
      expect(buildInstance).to.throw(SingletonError);
    });
    
    it("should return a GlobalGuidGenerator instance", function() {
      const generator:GuidGenerator = GlobalGuidGenerator.getInstance();
      expect(generator).to.be.an.instanceOf(GlobalGuidGenerator);
    });
    
    it("should return a singleton reference", function() {
      const generator1:GuidGenerator = GlobalGuidGenerator.getInstance();
      const generator2:GuidGenerator = GlobalGuidGenerator.getInstance();
      expect(generator1).to.equal(generator2);
    });
  });

  describe("#generate", ()=> {
    it("should return a valid GUID V4", function() {
      const guid:string = GlobalGuidGenerator.getInstance().generate();
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });

    it("should a unique GUID each time", function() {
      const generator:GuidGenerator =  GlobalGuidGenerator.getInstance();
      const guid1:string = generator.generate();
      const guid2:string = generator.generate();
      expect(guid1).to.not.equal(guid2);
    });
  });
});