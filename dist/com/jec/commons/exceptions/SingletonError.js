"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SingletonError extends Error {
    constructor(classRef) {
        super(`You cannot create a '${classRef.name}' instance, use getInstance() instead.`);
        this._classRef = null;
        this.initObj(classRef);
    }
    initObj(classRef) {
        this._classRef = classRef;
    }
    getClassRef() {
        return this._classRef;
    }
}
exports.SingletonError = SingletonError;
