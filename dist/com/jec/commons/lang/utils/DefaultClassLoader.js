"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassLoaderContext_1 = require("../../context/spi/ClassLoaderContext");
class DefaultClassLoader {
    constructor() { }
    loadClass(path) {
        ClassLoaderContext_1.ClassLoaderContext.getInstance().setPath(path);
        let classRef = require(path);
        ClassLoaderContext_1.ClassLoaderContext.getInstance().setPath(null);
        let props = Object.keys(classRef);
        let className = props[0];
        return classRef[className];
    }
}
exports.DefaultClassLoader = DefaultClassLoader;
