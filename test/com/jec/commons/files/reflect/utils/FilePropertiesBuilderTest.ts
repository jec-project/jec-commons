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
import {JecStringsEnum} from "../../../../../../../src/com/jec/commons/util/JecStringsEnum";
import {FileProperties} from "../../../../../../../src/com/jec/commons/files/reflect/FileProperties";
import {DecoratorProperties} from "../../../../../../../src/com/jec/commons/files/reflect/DecoratorProperties";
import {BasicDecoratorProperties} from "../../../../../../../src/com/jec/commons/files/reflect/impl/BasicDecoratorProperties";

// Class to test:
import {FilePropertiesBuilder} from "../../../../../../../src/com/jec/commons/files/reflect/utils/FilePropertiesBuilder";

// Test:
describe("FilePropertiesBuilder", ()=> {

  describe("#build()", ()=> {
    
    it("should return a FileProperties object built from the specified parameters", function() {
      let builder:FilePropertiesBuilder = new FilePropertiesBuilder();
      let properties:FileProperties = builder.build(FILE_NAME, FILE_PATH, null);
      let decoratorProps:DecoratorProperties[] = properties.decorators;
      let decoratorProp:DecoratorProperties = null;
      expect(properties.name).to.equal("SampleFile");
      expect(properties.path).to.equal("./utils/test-utils/file-properties-utils/");
      expect(properties.extension).to.equal(JecStringsEnum.JS_EXTENSION);
      //expect(properties.content).to.equal(FILE);
      expect(properties.stats).to.be.null;
      expect(properties.content).not.to.be.null;
      expect(decoratorProps).to.have.lengthOf(1);
      decoratorProp = decoratorProps[0];
      expect(decoratorProp).to.be.instanceOf(BasicDecoratorProperties);
      expect(decoratorProp).to.have.property("name", "SampleDecorator");
      expect(decoratorProp).to.have.property("classPath", "./SampleDecorator");
      expect(decoratorProp).to.have.property("value", DECORATOR_VALUE);
    });
  });
});

// Utilities:
const FILE_NAME:string = "SampleFile.js";
const FILE_PATH:string = "./utils/test-utils/file-properties-utils/SampleFile.js";
const DECORATOR_VALUE:string = "__decorate([\r\n    SampleDecorator_1.SampleDecorator()\r\n], SampleFile);";
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