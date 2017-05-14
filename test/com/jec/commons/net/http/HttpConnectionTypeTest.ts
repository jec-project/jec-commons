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
import {HttpConnectionType} from "../../../../../../src/com/jec/commons/net/http/HttpConnectionType";

// Test:
describe("HttpConnectionType", ()=> {

  describe("#HTTP", ()=> {
    it("HTTP should return 'http'", function() {
      expect(HttpConnectionType.HTTP).to.equal(HTTP);
    });
  });

  describe("#HTTPS", ()=> {
    it("HTTPS should return 'https'", function() {
      expect(HttpConnectionType.HTTPS).to.equal(HTTPS);
    });
  });
});

// Utilities:
// We store constants that should be defined by the HttpConnectionType class:
const HTTP:string = "http";
const HTTPS:string = "https";