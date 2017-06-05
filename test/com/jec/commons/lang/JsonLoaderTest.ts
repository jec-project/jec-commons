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
import {JsonLoaderError} from "../../../../../src/com/jec/commons/lang/JsonLoaderError";

// Class to test:
import {JsonLoader} from "../../../../../src/com/jec/commons/lang/JsonLoader";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/JsonLoaderTestUtils";

// Test:
describe("JsonLoader", ()=> {

  describe("#loadSync()", ()=> {
    it("should return a valid JavaScript Object", function() {
      let loader:JsonLoader = new JsonLoader();
      let result:any = loader.loadSync(utils.VALID_FILE);
      expect(result).to.have.property(utils.J_STRING, utils.STRING);
      expect(result).to.have.property(utils.J_NUMBER, utils.NUMBER);
      expect(result).to.have.property(utils.J_OBJECT).that.is.an("object").that.deep.equals(utils.OBJECT);
      expect(result).to.have.property(utils.J_ARRAY).that.is.an("array").that.deep.equals(utils.ARRAY);
      expect(result).to.have.property(utils.J_BOOLEAN, utils.BOOLEAN);
      expect(result).to.have.property(utils.J_NULL, null);
    });

    it("should throw an error when path is not valid", function() {
      let loader:JsonLoader = new JsonLoader();
      let loadInvalidFilePath:Function = function():void {
        loader.loadSync(utils.INVALID_FILE_PATH);
      };
      assert.throws(loadInvalidFilePath, Error);
    });

    it("should throw an error when JSON file is not valid", function() {
      let loader:JsonLoader = new JsonLoader();
      let loadInvalidFile:Function = function():void {
        loader.loadSync(utils.INVALID_FILE);
      };
      assert.throws(loadInvalidFile, Error);
    });
  });

  describe("#load()", ()=> {
    it("should return a valid JavaScript Object", function(done:Function) {
      let loader:JsonLoader = new JsonLoader();
      this.timeout(5000);
      let result:any = loader.load(utils.VALID_FILE,
        (data:any) => {
          expect(data).to.have.property(utils.J_STRING, utils.STRING);
          expect(data).to.have.property(utils.J_NUMBER, utils.NUMBER);
          expect(data).to.have.property(utils.J_OBJECT).that.is.an("object").that.deep.equals(utils.OBJECT);
          expect(data).to.have.property(utils.J_ARRAY).that.is.an("array").that.deep.equals(utils.ARRAY);
          expect(data).to.have.property(utils.J_BOOLEAN, utils.BOOLEAN);
          expect(data).to.have.property(utils.J_NULL, null);
          done();
        },
        (err:JsonLoaderError) => {
          assert.fail("ok", "ko", "Exception not thrown");
        }
      );
    });

    it("should throw an error when path is not valid", function(done:Function) {
      let loader:JsonLoader = new JsonLoader();
      this.timeout(5000);
      let result:any = loader.load(utils.INVALID_FILE_PATH,
        (data:any) => {
          assert.fail("ok", "ko", "Exception not thrown");
        },
        (err:JsonLoaderError) => {
          expect(err).to.not.be.null;
          done();
        }
      );
    });
    
    it("should throw an error when JSON file is not valid", function(done:Function) {
      let loader:JsonLoader = new JsonLoader();
      this.timeout(5000);
      let result:any = loader.load(utils.INVALID_FILE,
        (data:any) => {
          assert.fail("ok", "ko", "Exception not thrown");
        },
        (err:JsonLoaderError) => {
          expect(err).to.not.be.null;
          done();
        }
      );
    });
  });
});
