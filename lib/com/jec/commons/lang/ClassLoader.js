"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassLoader {
    constructor() { }
    loadClass(path) {
        let classRef = require(path);
        let props = Object.keys(classRef);
        let className = props[0];
        return classRef[className];
    }
}
exports.ClassLoader = ClassLoader;
