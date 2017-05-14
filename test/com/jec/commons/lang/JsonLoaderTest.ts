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
import {expect, assert, fail} from "chai";
import {JsonLoaderError} from "../../../../../src/com/jec/commons/lang/JsonLoaderError";

// Class to test:
import {JsonLoader} from "../../../../../src/com/jec/commons/lang/JsonLoader";

// Test:
describe("JsonLoader", ()=> {

  describe("#loadSync()", ()=> {
    it("should return a valid JavaScript Object", function() {
      let loader:JsonLoader = new JsonLoader();
      let result:any = loader.loadSync(VALID_FILE);
      expect(result).to.have.property(J_STRING, STRING);
      expect(result).to.have.property(J_NUMBER, NUMBER);
      expect(result).to.have.property(J_OBJECT).that.is.an("object").that.deep.equals(OBJECT);
      expect(result).to.have.property(J_ARRAY).that.is.an("array").that.deep.equals(ARRAY);
      expect(result).to.have.property(J_BOOLEAN, BOOLEAN);
      expect(result).to.have.property(J_NULL, null);
    });

    it("should throw an error when path is not valid", function() {
      let loader:JsonLoader = new JsonLoader();
      let loadInvalidFilePath:Function = function():void {
        loader.loadSync(INVALID_FILE_PATH);
      };
      assert.throws(loadInvalidFilePath, Error);
    });

    it("should throw an error when JSON file is not valid", function() {
      let loader:JsonLoader = new JsonLoader();
      let loadInvalidFile:Function = function():void {
        loader.loadSync(INVALID_FILE);
      };
      assert.throws(loadInvalidFile, Error);
    });
  });

  describe("#load()", ()=> {
    it("should return a valid JavaScript Object", function(done:Function) {
      let loader:JsonLoader = new JsonLoader();
      this.timeout(5000);
      let result:any = loader.load(VALID_FILE,
        (data:any) => {
          expect(data).to.have.property(J_STRING, STRING);
          expect(data).to.have.property(J_NUMBER, NUMBER);
          expect(data).to.have.property(J_OBJECT).that.is.an("object").that.deep.equals(OBJECT);
          expect(data).to.have.property(J_ARRAY).that.is.an("array").that.deep.equals(ARRAY);
          expect(data).to.have.property(J_BOOLEAN, BOOLEAN);
          expect(data).to.have.property(J_NULL, null);
          done();
        },
        (err:JsonLoaderError) => {
          fail("Exception not thrown");
        }
      );
    });

    it("should throw an error when path is not valid", function(done:Function) {
      let loader:JsonLoader = new JsonLoader();
      this.timeout(5000);
      let result:any = loader.load(INVALID_FILE_PATH,
        (data:any) => {
          fail("Exception not thrown");
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
      let result:any = loader.load(INVALID_FILE,
        (data:any) => {
          fail("Exception not thrown");
        },
        (err:JsonLoaderError) => {
          expect(err).to.not.be.null;
          done();
        }
      );
    });
  });
});

// Utilities:
const J_STRING:string = "jstring";
const J_NUMBER:string = "jnumber";
const J_OBJECT:string = "jobject";
const J_ARRAY:string = "jarray";
const J_BOOLEAN:string = "jboolean";
const J_NULL:string = "jnull";
const STRING:string = "string";
const OBJECT:any = { foo: "bar" };
const NUMBER:number = 30;
const ARRAY:number[] = [0,1];
const BOOLEAN:boolean = false;
const VALID_FILE:string = "./utils/test-utils/json-utils/valid-user.json";
const INVALID_FILE:string = "./utils/test-utils/son-utils/invalid-user.json";
const INVALID_FILE_PATH:string = "./utils/test-utils/invalid-path.json";