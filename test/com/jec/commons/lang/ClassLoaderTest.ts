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
import {expect, assert} from "chai";

// Class to test:
import {ClassLoader} from "../../../../../src/com/jec/commons/lang/ClassLoader";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/ClassLoaderTestUtils";

// Test:
describe("ClassLoader", ()=> {

  describe("#loadClass()", ()=> {
    it("should return a valid class constructor", function() {
      let loader:ClassLoader = new ClassLoader();
      let Contructor:any = loader.loadClass(utils.VALID_CLASS);
      let obj:any = new Contructor();
      expect(obj).not.to.be.null;
      expect(obj).to.be.an('object');
    });

    it("should throw an error when the path to class is not valid", function() {
      let loader:ClassLoader = new ClassLoader();
      let loadInvalidClassPath:Function = function():void {
        loader.loadClass(utils.INVALID_CLASS_PATH);
      };
      assert.throws(loadInvalidClassPath, Error);
    });

    it("should throw a TypeError when the loaded file is not a class", function() {
      let loader:ClassLoader = new ClassLoader();
      let Contructor:any = loader.loadClass(utils.INVALID_CLASS_FILE);
      try {
        new Contructor();
        assert.fail("ok", "ko", "Exception not thrown");
      } catch(e) {
        expect(e).to.be.an.instanceOf(TypeError);
      }
    });
  });
});
