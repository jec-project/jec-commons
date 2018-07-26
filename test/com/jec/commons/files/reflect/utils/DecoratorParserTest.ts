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
import {DecoratorProperties} from "../../../../../../../src/com/jec/commons/files/reflect/DecoratorProperties";

// Class to test:
import {DecoratorParser} from "../../../../../../../src/com/jec/commons/files/reflect/utils/DecoratorParser";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/DecoratorParserTestUtils";

// Test:
describe("DecoratorParser", ()=> {

  describe("#findDecorators()", ()=> {
    it("should return an empty array when the file does not contain decorator declarations", function() {
      const result:DecoratorProperties[] =
                               DecoratorParser.findDecorators(utils.EMPTY_FILE);
      expect(result).to.have.lengthOf(0);
    });

    it("should return an array composed of decorator properties found in the specified file", function() {
      const result:DecoratorProperties[] =
                               DecoratorParser.findDecorators(utils.VALID_FILE);
      let props:DecoratorProperties = null;
      expect(result).to.have.lengthOf(1);
      props = result[0];
      expect(props).to.have.property("name", "WebJslet");
      expect(props).to.have.property("classPath", "jec-jslet");
    });
  });
});
