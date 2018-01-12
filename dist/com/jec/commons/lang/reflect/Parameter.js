"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parameter {
    constructor(name) {
        this._name = null;
        this.initObj(name);
    }
    initObj(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
}
exports.Parameter = Parameter;
