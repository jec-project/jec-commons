"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
const GlobalGuidGenerator_1 = require("./GlobalGuidGenerator");
const UrlStringsEnum_1 = require("../../util/UrlStringsEnum");
const JecStringsEnum_1 = require("../../util/JecStringsEnum");
const nodePath = require("path");
class PathUtils {
    constructor() {
        this._id = null;
        if (PathUtils._locked || PathUtils.INSTANCE) {
            throw new SingletonError_1.SingletonError(PathUtils);
        }
        PathUtils._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (PathUtils.INSTANCE === null) {
            PathUtils._locked = false;
            PathUtils.INSTANCE = new PathUtils();
        }
        return PathUtils.INSTANCE;
    }
    initObj() {
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
    }
    buildFilePath(path, fileName) {
        const filePath = nodePath.join(path, fileName + UrlStringsEnum_1.UrlStringsEnum.DOT + JecStringsEnum_1.JecStringsEnum.JS_EXTENSION);
        return filePath;
    }
    getId() {
        return this._id;
    }
}
PathUtils.INSTANCE = null;
PathUtils._locked = true;
exports.PathUtils = PathUtils;
