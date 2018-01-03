"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GuidGeneratorBase_1 = require("../../lang/utils/GuidGeneratorBase");
class JcadContextImpl {
    constructor() {
        this._id = null;
        this.initObj();
    }
    initObj() {
        let generator = new GuidGeneratorBase_1.GuidGeneratorBase();
        this._id = generator.generate();
    }
    getId() {
        return this._id;
    }
}
exports.JcadContextImpl = JcadContextImpl;
