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
import {Properties} from "../../../../../src/com/jec/commons/util/Properties";

// Test:
describe("Properties", ()=> {

  describe("new Property()", ()=> {
    it("the properties names array should be empty", function() {
      let props:Properties = new Properties();
      let propsNames:string[] = props.propertyNames();
      expect(propsNames.length).to.equal(0);
    });
  });

  describe("#setProperty(KEY, VALUE) => #getProperty(KEY)", ()=> {
    it("a Properties instance should refer the registered properties", function() {
      let props:Properties = new Properties();
      props.setProperty(KEY, VALUE);
      expect(props.getProperty(KEY)).to.equal(VALUE);
    });
  });

  describe("#getProperty() === undefined", ()=> {
    it("not defined keys should return 'undefined'", function() {
      let props:Properties = new Properties();
      expect(props.getProperty(UNDEFINED)).to.equal(undefined);
    });
  });

  describe("#propertiesNames()", ()=> {
    it("a Properties instance should expose the registered key names", function() {
      let props:Properties = new Properties();
      props.setProperty(KEY, VALUE);
      let propsNames:string[] = props.propertyNames();
      expect(propsNames.length).to.equal(1);
      expect(propsNames).to.include(KEY);
    });
  });

  describe("new Property(properties:Property)", ()=> {
    it("a Properties instance should refer default properties", function() {
      let defaultProps:Properties = new Properties();
      defaultProps.setProperty(KEY, VALUE);
      let props:Properties = new Properties(defaultProps);
      expect(props.getProperty(KEY)).to.equal(VALUE);
    });
  });
});

// Utilities:
const KEY:string = "key";
const UNDEFINED:string = "undefined";
const VALUE:string = "value";