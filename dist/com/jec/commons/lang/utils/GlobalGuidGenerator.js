"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
const GuidGeneratorBase_1 = require("./GuidGeneratorBase");
class GlobalGuidGenerator {
    constructor() {
        this._generator = null;
        this._id = null;
        if (GlobalGuidGenerator._locked || GlobalGuidGenerator.INSTANCE) {
            throw new SingletonError_1.SingletonError(GlobalGuidGenerator);
        }
        GlobalGuidGenerator._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (GlobalGuidGenerator.INSTANCE === null) {
            GlobalGuidGenerator._locked = false;
            GlobalGuidGenerator.INSTANCE = new GlobalGuidGenerator();
        }
        return GlobalGuidGenerator.INSTANCE;
    }
    initObj() {
        this._generator = new GuidGeneratorBase_1.GuidGeneratorBase();
        this._id = this._generator.generate();
    }
    generate() {
        return this._generator.generate();
    }
    getId() {
        return this._id;
    }
}
GlobalGuidGenerator.INSTANCE = null;
GlobalGuidGenerator._locked = true;
exports.GlobalGuidGenerator = GlobalGuidGenerator;
