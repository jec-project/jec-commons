"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DefaultClassLoader {
    constructor() { }
    loadClass(path) {
        let classRef = require(path);
        let props = Object.keys(classRef);
        let className = props[0];
        return classRef[className];
    }
}
exports.DefaultClassLoader = DefaultClassLoader;
