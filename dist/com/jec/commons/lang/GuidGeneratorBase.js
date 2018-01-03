"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class GuidGeneratorBase {
    constructor() { }
    generate() {
        return uuid.v4();
    }
}
exports.GuidGeneratorBase = GuidGeneratorBase;
