"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JcadContextError_1 = require("../exceptions/JcadContextError");
const SingletonError_1 = require("../../exceptions/SingletonError");
class JcadContextManager {
    constructor() {
        this._jcadContextMap = null;
        if (JcadContextManager._locked || global["__JcadContextManager__"]) {
            throw new SingletonError_1.SingletonError(JcadContextManager);
        }
        JcadContextManager._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (global["__JcadContextManager__"] === undefined) {
            JcadContextManager._locked = false;
            global["__JcadContextManager__"] = new JcadContextManager();
        }
        return global["__JcadContextManager__"];
    }
    initObj() {
        this._jcadContextMap = new Map();
    }
    getContext(jcadReference) {
        return this._jcadContextMap.get(jcadReference);
    }
    addContext(jcadReference, context) {
        if (this._jcadContextMap.has(jcadReference)) {
            throw new JcadContextError_1.JcadContextError("A JCAD context with reference '" + jcadReference + "' already exists.");
        }
        this._jcadContextMap.set(jcadReference, context);
    }
    hasContext(jcadReference) {
        return this._jcadContextMap.has(jcadReference);
    }
    removeContext(jcadReference) {
        let context = this._jcadContextMap.get(jcadReference);
        this._jcadContextMap.delete(jcadReference);
        return context;
    }
}
JcadContextManager._locked = true;
exports.JcadContextManager = JcadContextManager;
