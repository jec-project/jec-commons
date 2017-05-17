"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GuidGenerator_1 = require("../../lang/GuidGenerator");
class JcadContextImpl {
    constructor() {
        this._id = null;
        this.initObj();
    }
    initObj() {
        let generator = new GuidGenerator_1.GuidGenerator();
        this._id = generator.generate();
    }
    getId() {
        return this._id;
    }
}
exports.JcadContextImpl = JcadContextImpl;
