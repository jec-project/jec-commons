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
import {AbstractMember} from "../../../../../../src/com/jec/commons/lang/reflect/AbstractMember";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/AbstractMemberTestUtils";

// Test:
describe("AbstractMember", ()=> {

  const member:AbstractMember = utils.buildAbstractMember();

  it("#getName() should retrieve the same value as passed to the constructor parameter", function() {
    expect(member.getName()).to.equal(utils.NAME);
  });
  
  it("#getType() should retrieve the same value as passed to the constructor parameter", function() {
    expect(member.getType()).to.equal(utils.TYPE);
  });
  
  it("#getDeclaringClass() should retrieve the same value as passed to the constructor parameter", function() {
    expect(member.getDeclaringClass()).to.equal(utils.CLASS);
  });
});
