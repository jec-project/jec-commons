"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JcadContextImpl_1 = require("./JcadContextImpl");
class JcadContextFactory {
    constructor() { }
    create() {
        return new JcadContextImpl_1.JcadContextImpl();
    }
}
exports.JcadContextFactory = JcadContextFactory;
