"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicFileProperties_1 = require("../impl/BasicFileProperties");
class FilePropertiesBuilder {
    constructor() { }
    build(file, path, stats) {
        let fileProps = new BasicFileProperties_1.BasicFileProperties();
        return fileProps;
    }
}
exports.FilePropertiesBuilder = FilePropertiesBuilder;
