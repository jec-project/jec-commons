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
import {ClassLoader} from "../../../../../../src/com/jec/commons/lang/ClassLoader";
import {SingletonError} from "../../../../../../src/com/jec/commons/exceptions/SingletonError";

// Class to test:
import {GlobalClassLoader} from "../../../../../../src/com/jec/commons/lang/utils/GlobalClassLoader";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/ClassLoaderTestUtils";

// Test:
describe("GlobalClassLoader", ()=> {

  describe("#singleton()", ()=> {

    it("should throw a singleton error when calling the constructor function", function() {
      let buildInstance:Function = function():void {
        new GlobalClassLoader();
      };
      expect(buildInstance).to.throw(SingletonError);
    });
    
    it("should return a GlobalClassLoader instance", function() {
      let loader:ClassLoader = GlobalClassLoader.getInstance();
      expect(loader).to.be.an.instanceOf(GlobalClassLoader);
    });
    
    it("should return a singleton reference", function() {
      let loader1:ClassLoader = GlobalClassLoader.getInstance();
      let loader2:ClassLoader = GlobalClassLoader.getInstance();
      expect(loader1).to.equal(loader2);
    });
  });

  describe("#loadClass()", ()=> {

    it("should return a valid class constructor", function() {
      let Contructor:any = GlobalClassLoader.getInstance()
                                            .loadClass(utils.VALID_CLASS);
      let obj:any = new Contructor();
      expect(obj).not.to.be.null;
      expect(obj).to.be.an('object');
    });

    it("should throw an error when the path to class is not valid", function() {
      let loadInvalidClassPath:Function = function():void {
        GlobalClassLoader.getInstance().loadClass(utils.INVALID_CLASS_PATH);
      };
      assert.throws(loadInvalidClassPath, Error);
    });

    it("should throw a TypeError when the loaded file is not a class", function() {
      let Contructor:any = 
            GlobalClassLoader.getInstance().loadClass(utils.INVALID_CLASS_FILE);
      try {
        new Contructor();
        assert.fail("ok", "ko", "Exception not thrown");
      } catch(e) {
        expect(e).to.be.an.instanceOf(TypeError);
      }
    });
  });
});
