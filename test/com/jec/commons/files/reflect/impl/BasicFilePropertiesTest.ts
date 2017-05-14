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
import {BasicFileProperties} from "../../../../../../../src/com/jec/commons/files/reflect/impl/BasicFileProperties";

// Test:
describe("BasicFileProperties", ()=> {

  let fileProps:BasicFileProperties = new BasicFileProperties();

  it("should have a 'name' property", function() {
    expect(fileProps).to.have.property("name", null);
  });

  it("should have a 'path' property", function() {
    expect(fileProps).to.have.property("path", null);
  });

  it("should have an 'extension' property", function() {
    expect(fileProps).to.have.property("extension", null);
  });
  
  it("should have a 'stats' property", function() {
    expect(fileProps).to.have.property("stats", null);
  });

  it("should have a 'content' property", function() {
    expect(fileProps).to.have.property("content", null);
  });

  it("should have a 'decorators' property", function() {
    expect(fileProps).to.have.property("decorators", null);
  });
});
