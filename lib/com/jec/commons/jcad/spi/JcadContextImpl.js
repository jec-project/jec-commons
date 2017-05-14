"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class JcadContextImpl {
    constructor() {
        this._id = null;
        this.initObj();
    }
    initObj() {
        this._id = uuid.v4();
    }
    getId() {
        return this._id;
    }
}
exports.JcadContextImpl = JcadContextImpl;
