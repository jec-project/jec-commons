"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorPropertiesBuilder_1 = require("./DecoratorPropertiesBuilder");
const ImportRefParser_1 = require("./ImportRefParser");
class DecoratorParser {
    constructor() { }
    static findDecorators(file) {
        let builder = new DecoratorPropertiesBuilder_1.DecoratorPropertiesBuilder();
        let result = new Array();
        let found = null;
        let decoratorString = null;
        let props = null;
        let imports = DecoratorParser.PARSER.getImports(file);
        while (found = DecoratorParser.JS_PATTERN.exec(file)) {
            decoratorString = found[0].trim();
            props = builder.build(decoratorString, file, imports);
            result.push(props);
        }
        return result;
    }
}
DecoratorParser.JS_PATTERN = /__decorate\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\);/gm;
DecoratorParser.TS_PATTERN = /^\s*@[a-zA-Z]+([A-z0-9]+)?\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/gm;
DecoratorParser.PARSER = new ImportRefParser_1.ImportRefParser();
exports.DecoratorParser = DecoratorParser;
