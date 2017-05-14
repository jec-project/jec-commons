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

// Class to test:
import {DecoratorParser} from "../../../../../../../src/com/jec/commons/files/reflect/utils/DecoratorParser";

// Test:
describe("DecoratorParser", ()=> {

  describe("#findDecorators()", ()=> {
    it("should return an empty array when the file does not contain decorator declarations", function() {
      let result:DecoratorProperties[] = DecoratorParser.findDecorators(EMPTY_FILE);
      expect(result).to.have.lengthOf(0);
    });

    it("should return an array composed of decorator properties found in the specified file", function() {
      let result:DecoratorProperties[] = DecoratorParser.findDecorators(VALID_FILE);
      let props:DecoratorProperties = null;
      expect(result).to.have.lengthOf(1);
      props = result[0];
      expect(props).to.have.property("name", "WebJslet");
      expect(props).to.have.property("classPath", "jec-jslet");
    });
  });
});

const EMPTY_FILE:string = "";
const VALID_FILE:string = `
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpJslet_1 = require("jec-jslet");
const WebJslet_1 = require("jec-jslet");
let Welcome = class Welcome extends HttpJslet_1.HttpJslet {
    doGet(req, res, exit) {
        exit(req, res, { sayHello: "GlassCat is alive!" });
    }
};
Welcome = __decorate([
    WebJslet_1.WebJslet({
        name: "WelcomeJslet",
        urlPatterns: ["/welcome"],
        template: "/views/welcome.ejs"
    })
], Welcome);
exports.Welcome = Welcome;
`;