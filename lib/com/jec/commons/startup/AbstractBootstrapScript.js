"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BootstrapError_1 = require("./exceptions/BootstrapError");
class AbstractBootstrapScript {
    constructor() {
        this.__priority = null;
    }
    run(container) {
        throw new BootstrapError_1.BootstrapError("run() method must be overriden");
    }
    getPriority() {
        return this.__priority;
    }
    setPriority(priority) {
        this.__priority = priority;
    }
}
exports.AbstractBootstrapScript = AbstractBootstrapScript;
