"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClassLoaderContext_1 = require("../../context/spi/ClassLoaderContext");
class DefaultClassLoader {
    constructor() { }
    loadClass(path) {
        ClassLoaderContext_1.ClassLoaderContext.getInstance().setPath(path);
        const classRef = require(path);
        ClassLoaderContext_1.ClassLoaderContext.getInstance().setPath(null);
        const props = Object.keys(classRef);
        const className = props[0];
        return classRef[className];
    }
}
exports.DefaultClassLoader = DefaultClassLoader;
