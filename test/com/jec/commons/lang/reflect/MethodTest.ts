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
import {Member} from "../../../../../../src/com/jec/commons/lang/reflect/Member";
import {MemberType} from "../../../../../../src/com/jec/commons/lang/reflect/MemberType";

// Class to test:
import {Method} from "../../../../../../src/com/jec/commons/lang/reflect/Method";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/MethodTestUtils";

// Test:
describe("Method", ()=> {

  const member:Member = utils.buildMethod();

  it("#getName() should retrieve the same value as passed to the constructor parameter", function() {
    expect(member.getName()).to.equal(utils.METHOD_NAME);
  });
  
  it("#getType() should return 'MemberType.FIELD'", function() {
    expect(member.getType()).to.equal(MemberType.METHOD);
  });
  
  it("#getDeclaringClass() should retrieve the same value as passed to the constructor parameter", function() {
    expect(member.getDeclaringClass()).to.equal(utils.MethodMemberTest);
  });
});
