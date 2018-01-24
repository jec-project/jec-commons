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
import {SingletonError} from "../../../../../../src/com/jec/commons/exceptions/SingletonError";
import {JcadContext} from "../../../../../../src/com/jec/commons/jcad/JcadContext"; 
import {JcadContextError} from "../../../../../../src/com/jec/commons/jcad/exceptions/JcadContextError";

// Class to test:
import {ClassLoaderContext} from "../../../../../../src/com/jec/commons/context/spi/ClassLoaderContext";

// Utilities:
import {GuidTestUtils} from "../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("ClassLoaderContext", ()=> {

  describe("#constructor()", ()=> {
    it("should throw a SingletonError", function() {
      let buildFromConstructor:Function = function():void {
        new ClassLoaderContext();
      };
      assert.throws(buildFromConstructor, SingletonError);
    });
  });

  describe("#getInstance()", ()=> {
    it("should return the reference to the singleton instance", function() {
      expect(
        ClassLoaderContext.getInstance()
      ).to.be.instanceOf(ClassLoaderContext);
    });
  });

  describe("#getInstance()", ()=> {
    it("should return a singleton", function() {
      expect(
        ClassLoaderContext.getInstance()
      ).to.equal(ClassLoaderContext.getInstance());
    });
  });

  describe("#getId()", ()=> {
    it("should always return a valid GUID", function() {
      this.retries(10);
      let guid:string = ClassLoaderContext.getInstance().getId();
      expect(guid).to.be.a("string");
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });
  });

  describe("#getPath(), #setPath()", ()=> {

    const PATH:string = "foo/bar";

    it("should return 'null' when no path is defined", function() {
      let context:ClassLoaderContext = ClassLoaderContext.getInstance();
      expect(context.getPath()).to.be.null;
    });

    it("should set a path to the context", function() {
      let context:ClassLoaderContext = ClassLoaderContext.getInstance();
      expect(context.setPath(PATH)).to.be.OK;
    });

    it("should retrieve the same value as passed to the setPath() method", function() {
      let context:ClassLoaderContext = ClassLoaderContext.getInstance();
      expect(context.getPath()).to.equal(PATH);
    });
  });
});
