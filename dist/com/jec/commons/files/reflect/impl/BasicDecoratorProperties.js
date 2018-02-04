"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicDecoratorProperties {
    constructor() {
        this.name = null;
        this.classPath = null;
        this.value = null;
        this.decoratorType = null;
    }
    toString() {
        let result = `[DecoratorProperties: name=${this.name}, classPath=${this.classPath}, decoratorType=${this.decoratorType},
value=${this.value}]`;
        return result;
    }
}
exports.BasicDecoratorProperties = BasicDecoratorProperties;
