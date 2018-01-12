"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractMember {
    constructor(name, type, declaringClass) {
        this._name = null;
        this._type = null;
        this._declaringClass = null;
        this.initObj(name, type, declaringClass);
    }
    initObj(name, type, declaringClass) {
        this._name = name;
        this._type = type;
        this._declaringClass = declaringClass;
    }
    getName() {
        return this._name;
    }
    getType() {
        return this._type;
    }
    getDeclaringClass() {
        return this._declaringClass;
    }
}
exports.AbstractMember = AbstractMember;
;
