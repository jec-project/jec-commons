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
import {ImportRef} from "../../../../../../../src/com/jec/commons/files/reflect/utils/ImportRef";

// Class to test:
import {ImportRefParser} from "../../../../../../../src/com/jec/commons/files/reflect/utils/ImportRefParser";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/ImportRefParserTestUtils";

// Test:
describe("ImportRefParser", ()=> {

  let parser:ImportRefParser = null;

  beforeEach(()=> {
    parser = new ImportRefParser();
  });

  afterEach(()=> {
    parser = null;
  });

  describe("#getImports()", ()=> {
    
    it("should return an empty array when the specified file does not contain decorator import references", function() {
      let importRefs:ImportRef[] = parser.getImports(utils.EMPTY_FILE);
      expect(importRefs).to.have.lengthOf(0);
    });

    it("should return an array that contains decorator import references for the specified file", function() {
      let importRefs:ImportRef[] = parser.getImports(utils.FILE);
      expect(importRefs).to.have.lengthOf(1);
    });
    
    it("should return an ImportRef object with the right 'ref' vlaue ", function() {
      let importRefs:ImportRef[] = parser.getImports(utils.FILE);
      let importRef:ImportRef = importRefs[0];
      expect(importRef.ref).to.equal(utils.REF);
    });
    
    it("should return an ImportRef object with the right 'classPath' vlaue ", function() {
      let importRefs:ImportRef[] = parser.getImports(utils.FILE);
       let importRef:ImportRef = importRefs[0];
      expect(importRef.classPath).to.equal(utils.CLASS_PATH);
    });
    
    it("should return an ImportRef object with the right 'content' vlaue ", function() {
      let importRefs:ImportRef[] = parser.getImports(utils.FILE);
       let importRef:ImportRef = importRefs[0];
      expect(importRef.content).to.equal(utils.CONTENT);
    });
  });
});
