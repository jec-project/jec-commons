"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JcadContextError_1 = require("../exceptions/JcadContextError");
class JcadValidator {
    constructor() { }
    validateContext(context, contextType) {
        if (!context)
            throw new JcadContextError_1.JcadContextError(`${contextType} must not be null!`);
    }
}
exports.JcadValidator = JcadValidator;
