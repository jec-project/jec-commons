"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractDecoratorConnector {
    constructor(jcadReference, decorator) {
        this.__jcadReference = null;
        this.__decorator = null;
        this.initObj(jcadReference, decorator);
    }
    initObj(jcadReference, decorator) {
        this.__jcadReference = jcadReference;
        this.__decorator = decorator;
    }
    getJcadReference() {
        return this.__jcadReference;
    }
    getDecorator() {
        return this.__decorator;
    }
}
exports.AbstractDecoratorConnector = AbstractDecoratorConnector;
