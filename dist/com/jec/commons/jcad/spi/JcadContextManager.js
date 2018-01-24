"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JcadContextError_1 = require("../exceptions/JcadContextError");
const SingletonError_1 = require("../../exceptions/SingletonError");
const GlobalGuidGenerator_1 = require("../../lang/utils/GlobalGuidGenerator");
class JcadContextManager {
    constructor() {
        this._jcadContextMap = null;
        this._id = null;
        if (JcadContextManager._locked || global[JcadContextManager.GLOBAL_REF]) {
            throw new SingletonError_1.SingletonError(JcadContextManager);
        }
        JcadContextManager._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (global[JcadContextManager.GLOBAL_REF] === undefined) {
            JcadContextManager._locked = false;
            let ctx = new JcadContextManager();
            Object.defineProperty(global, JcadContextManager.GLOBAL_REF, {
                value: ctx,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
        return global[JcadContextManager.GLOBAL_REF];
    }
    initObj() {
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
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
    getId() {
        return this._id;
    }
}
JcadContextManager._locked = true;
JcadContextManager.GLOBAL_REF = "__JcadContextManager__";
exports.JcadContextManager = JcadContextManager;
