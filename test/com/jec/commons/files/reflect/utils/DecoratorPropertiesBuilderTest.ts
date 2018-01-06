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
import {ImportRef} from "../../../../../../../src/com/jec/commons/files/reflect/utils/ImportRef";

// Class to test:
import {DecoratorPropertiesBuilder} from "../../../../../../../src/com/jec/commons/files/reflect/utils/DecoratorPropertiesBuilder";

// Utilities:
import * as utils from "../../../../../../../utils/test-utils/utilities/DecoratorPropertiesBuilderTestUtils";

// Test:
describe("DecoratorPropertiesBuilder", ()=> {

  let importRefs:ImportRef[] = null;
  let builder:DecoratorPropertiesBuilder = null;
  let properties:DecoratorProperties = null;

  beforeEach(()=> {
    importRefs = utils.buildImportRefs();
    builder = new DecoratorPropertiesBuilder();
    properties = builder.build(utils.DECORATOR, utils.FILE, importRefs);
  });

  afterEach(()=> {
    importRefs = null;
    builder = null;
    properties = null;
  });

  describe("#build()", ()=> {
    
    it("should return a 'classPath' reference built from the specified parameters", function() {
      expect(properties.classPath).to.equal(utils.CLASS_PATH);
    });
    
    it("should return a 'name' reference built from the specified parameters", function() {
      expect(properties.name).to.equal(utils.NAME);
    });
    
    it("should return a 'value' reference built from the specified parameters", function() {
      expect(properties.value).to.equal(utils.DECORATOR);
    });
  });
});
