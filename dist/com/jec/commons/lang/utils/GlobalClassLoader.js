"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
const DefaultClassLoader_1 = require("./DefaultClassLoader");
const GlobalGuidGenerator_1 = require("./GlobalGuidGenerator");
class GlobalClassLoader {
    constructor() {
        this._loader = null;
        this._id = null;
        if (GlobalClassLoader._locked || GlobalClassLoader.INSTANCE) {
            throw new SingletonError_1.SingletonError(GlobalClassLoader);
        }
        GlobalClassLoader._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (GlobalClassLoader.INSTANCE === null) {
            GlobalClassLoader._locked = false;
            GlobalClassLoader.INSTANCE = new GlobalClassLoader();
        }
        return GlobalClassLoader.INSTANCE;
    }
    initObj() {
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
        this._loader = new DefaultClassLoader_1.DefaultClassLoader();
    }
    loadClass(path) {
        return this._loader.loadClass(path);
    }
    getId() {
        return this._id;
    }
}
GlobalClassLoader.INSTANCE = null;
GlobalClassLoader._locked = true;
exports.GlobalClassLoader = GlobalClassLoader;
