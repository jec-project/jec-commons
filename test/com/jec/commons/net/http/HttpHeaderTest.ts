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
import {HttpHeader} from "../../../../../../src/com/jec/commons/net/http/HttpHeader";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/HttpHeaderTestUtils";

// Test:
describe("HttpHeader", ()=> {

  describe("#ACCEPT", ()=> {
    it("ACCEPT should return 'Accept'", function() {
      expect(HttpHeader.ACCEPT).to.equal(utils.ACCEPT);
    });
  });

  describe("#ACCESS_CONTROL_ALLOW_ORIGIN", ()=> {
    it("ACCEPT should return 'Access-Control-Allow-Origin'", function() {
      expect(HttpHeader.ACCESS_CONTROL_ALLOW_ORIGIN).to.equal(utils.ACCESS_CONTROL_ALLOW_ORIGIN);
    });
  });

  describe("#CONTENT_TYPE", ()=> {
    it("CONTENT_TYPE should return 'Content-Type'", function() {
      expect(HttpHeader.CONTENT_TYPE).to.equal(utils.CONTENT_TYPE);
    });
  });

  describe("#X_POWERED_BY", ()=> {
    it("X_POWERED_BY should return 'X-Powered-By'", function() {
      expect(HttpHeader.X_POWERED_BY).to.equal(utils.X_POWERED_BY);
    });
  });
  
});
