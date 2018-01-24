"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
const GlobalGuidGenerator_1 = require("../../lang/utils/GlobalGuidGenerator");
class ClassLoaderContext {
    constructor() {
        this._id = null;
        this._path = null;
        if (ClassLoaderContext._locked || global[ClassLoaderContext.GLOBAL_REF]) {
            throw new SingletonError_1.SingletonError(ClassLoaderContext);
        }
        ClassLoaderContext._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (global[ClassLoaderContext.GLOBAL_REF] === undefined) {
            ClassLoaderContext._locked = false;
            let ctx = new ClassLoaderContext();
            Object.defineProperty(global, ClassLoaderContext.GLOBAL_REF, {
                value: ctx,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
        return global[ClassLoaderContext.GLOBAL_REF];
    }
    initObj() {
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
    }
    setPath(path) {
        this._path = path;
    }
    getPath() {
        return this._path;
    }
    getId() {
        return this._id;
    }
}
ClassLoaderContext._locked = true;
ClassLoaderContext.GLOBAL_REF = "__ClassLoaderContext__";
exports.ClassLoaderContext = ClassLoaderContext;
