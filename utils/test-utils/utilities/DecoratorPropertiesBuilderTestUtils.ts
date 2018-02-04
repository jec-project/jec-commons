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

import {ImportRef} from "../../../src/com/jec/commons/files/reflect/utils/ImportRef";
import {ImportRefParser} from "../../../src/com/jec/commons/files/reflect/utils/ImportRefParser";
import {DecoratorType} from "../../../src/com/jec/commons/files/reflect/utils/DecoratorType";

/*!
 * This module constains utilities used by the DecoratorParserTest test suite.
 */

// Utilities:
export const DECORATOR:string = "__decorate([\r\n    SampleDecorator_1.SampleDecorator()\r\n], SampleFile);";
export const FILE:string =
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
export const CLASS_PATH:string = "./SampleDecorator";
export const NAME:string = "SampleDecorator";
export const DECORATOR_TYPE:DecoratorType = DecoratorType.FIELD;
