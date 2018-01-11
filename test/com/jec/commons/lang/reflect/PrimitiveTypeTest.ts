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

// Class to test:
import {PrimitiveType} from "../../../../../../src/com/jec/commons/lang/reflect/PrimitiveType";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/PrimitiveTypeTestUtils";

// Test:
describe("PrimitiveType", ()=> {

  it("UNDEFINED should return 'undefined'", function() {
    expect(PrimitiveType.UNDEFINED).to.equal(utils.UNDEFINED);
  });

  it("NULL should return 'object'", function() {
    expect(PrimitiveType.NULL).to.equal(utils.NULL);
  });

  it("BOOLEAN should return 'boolean'", function() {
    expect(PrimitiveType.BOOLEAN).to.equal(utils.BOOLEAN);
  });

  it("NUMBER should return 'number'", function() {
    expect(PrimitiveType.NUMBER).to.equal(utils.NUMBER);
  });

  it("STRING should return 'string'", function() {
    expect(PrimitiveType.STRING).to.equal(utils.STRING);
  });

  it("SYMBOL should return 'symbol'", function() {
    expect(PrimitiveType.SYMBOL).to.equal(utils.SYMBOL);
  });
  
  it("FUNCTION should return 'function'", function() {
    expect(PrimitiveType.FUNCTION).to.equal(utils.FUNCTION);
  });
  
  it("OBJECT should return 'object'", function() {
    expect(PrimitiveType.OBJECT).to.equal(utils.OBJECT);
  });
});