"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JcadContextImpl_1 = require("./JcadContextImpl");
class JcadContextFactory {
    constructor() { }
    create() {
        let context = new JcadContextImpl_1.JcadContextImpl();
        return context;
    }
}
exports.JcadContextFactory = JcadContextFactory;
