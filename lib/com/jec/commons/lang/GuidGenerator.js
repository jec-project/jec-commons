"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class GuidGenerator {
    constructor() { }
    generate() {
        return uuid.v4();
    }
}
exports.GuidGenerator = GuidGenerator;
