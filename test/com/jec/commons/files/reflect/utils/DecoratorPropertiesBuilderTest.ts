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
import {DecoratorProperties} from "../../../../../../../src/com/jec/commons/files/reflect/DecoratorProperties";
import {ImportRef} from "../../../../../../../src/com/jec/commons/files/reflect/utils/ImportRef";
import {ImportRefParser} from "../../../../../../../src/com/jec/commons/files/reflect/utils/ImportRefParser";

// Class to test:
import {DecoratorPropertiesBuilder} from "../../../../../../../src/com/jec/commons/files/reflect/utils/DecoratorPropertiesBuilder";

// Test:
describe("DecoratorPropertiesBuilder", ()=> {

  describe("#build()", ()=> {
    
    it("should return a DecoratorProperties object built from the specified parameters", function() {
      let importRefs:ImportRef[] = buildImportRefs();
      let builder:DecoratorPropertiesBuilder = new DecoratorPropertiesBuilder();
      let properties:DecoratorProperties = builder.build(DECORATOR, FILE, importRefs);
      expect(properties.classPath).to.equal("./SampleDecorator");
      expect(properties.name).to.equal("SampleDecorator");
      expect(properties.value).to.equal(DECORATOR);
    });
  });
});

// Utilities:
const buildImportRefs:Function = function():ImportRef[] {
  let parser:ImportRefParser = new ImportRefParser();
  return parser.getImports(FILE);
}
const DECORATOR:string = "__decorate([\r\n    SampleDecorator_1.SampleDecorator()\r\n], SampleFile);";
const FILE:string =
`"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const SampleDecorator_1 = require("./SampleDecorator");
let SampleFile = class SampleFile {
};
SampleFile = __decorate([
    SampleDecorator_1.SampleDecorator()
], SampleFile);
exports.SampleFile = SampleFile;
`;