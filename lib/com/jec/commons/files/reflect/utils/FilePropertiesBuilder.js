"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorParser_1 = require("./DecoratorParser");
const BasicFileProperties_1 = require("../impl/BasicFileProperties");
const JecStringsEnum_1 = require("../../../util/JecStringsEnum");
const fs = require("fs");
class FilePropertiesBuilder {
    constructor() { }
    build(file, path, stats) {
        let fileProps = new BasicFileProperties_1.BasicFileProperties();
        let filelength = file.length;
        let extPos = filelength - 3;
        fileProps.name = file.substr(0, extPos);
        fileProps.path = path.substr(0, path.length - filelength);
        fileProps.extension = JecStringsEnum_1.JecStringsEnum.JS_EXTENSION;
        fileProps.stats = stats;
        let rawFile = fs.readFileSync(path).toString();
        fileProps.content = rawFile;
        fileProps.decorators = DecoratorParser_1.DecoratorParser.findDecorators(rawFile);
        return fileProps;
    }
}
exports.FilePropertiesBuilder = FilePropertiesBuilder;
