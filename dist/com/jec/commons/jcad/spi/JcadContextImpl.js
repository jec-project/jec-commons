"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalGuidGenerator_1 = require("../../lang/utils/GlobalGuidGenerator");
class JcadContextImpl {
    constructor() {
        this._id = null;
        this.initObj();
    }
    initObj() {
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
    }
    getId() {
        return this._id;
    }
}
exports.JcadContextImpl = JcadContextImpl;
