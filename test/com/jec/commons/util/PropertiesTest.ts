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
import {Properties} from "../../../../../src/com/jec/commons/util/Properties";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/PropertiesTestUtils";

// Test:
describe("Properties", ()=> {

  let props:Properties = null;

  beforeEach(()=> {
    props = new Properties();
  });
  
  afterEach(()=> {
    props = new Properties();
  });
  
  describe("new Property()", ()=> {
    it("the properties names array should be empty", function() {
      const propsNames:string[] = props.propertyNames();
      expect(propsNames.length).to.equal(0);
    });
  });

  describe("#setProperty(KEY, VALUE) => #getProperty(KEY)", ()=> {
    it("a Properties instance should refer the registered properties", function() {
      props.setProperty(utils.KEY, utils.VALUE);
      expect(props.getProperty(utils.KEY)).to.equal(utils.VALUE);
    });
  });

  describe("#getProperty() === undefined", ()=> {
    it("not defined keys should return 'undefined'", function() {
      expect(props.getProperty(utils.UNDEFINED)).to.equal(undefined);
    });
  });

  describe("#propertiesNames()", ()=> {
    it("a Properties instance should expose the registered key names", function() {
      props.setProperty(utils.KEY, utils.VALUE);
      const propsNames:string[] = props.propertyNames();
      expect(propsNames.length).to.equal(1);
      expect(propsNames).to.include(utils.KEY);
    });
  });

  describe("new Property(properties:Property)", ()=> {
    it("a Properties instance should refer default properties", function() {
      props.setProperty(utils.KEY, utils.VALUE);
      const proxy:Properties = new Properties(props);
      expect(proxy.getProperty(utils.KEY)).to.equal(utils.VALUE);
    });
  });
});
