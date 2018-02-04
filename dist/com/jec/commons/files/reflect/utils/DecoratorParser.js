"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DecoratorPropertiesBuilder_1 = require("./DecoratorPropertiesBuilder");
const ImportRefParser_1 = require("./ImportRefParser");
const DecoratorType_1 = require("./DecoratorType");
const UrlStringsEnum_1 = require("../../../util/UrlStringsEnum");
class DecoratorParser {
    constructor() { }
    static getClassPath(classRef, refs) {
        let len = refs.length;
        let importRef = null;
        let classPath = null;
        while (len--) {
            importRef = refs[len];
            if (importRef.ref === classRef) {
                classPath = importRef.classPath;
                break;
            }
        }
        return classPath;
    }
    static extractFields(result, refs, file) {
        let found = null;
        let decoratorString = null;
        let props = null;
        let classPath = null;
        while (found = DecoratorParser.FIELD_PATTERN.exec(file)) {
            decoratorString = found[0].trim();
            classPath = this.getClassPath(found[1], refs);
            props = DecoratorParser.BUILDER.build(found[2], decoratorString, classPath, DecoratorType_1.DecoratorType.FIELD);
            result.push(props);
        }
    }
    static extractMembers(result, refs, file) {
        let found = null;
        let decoratorString = null;
        let props = null;
        let dotPos = -1;
        let cursor = -1;
        let stringBuffer = null;
        let decoratorName = null;
        let classPath = null;
        while (found = DecoratorParser.MEMBER_PATTERN.exec(file)) {
            decoratorString = found[0].trim();
            dotPos = decoratorString.indexOf(UrlStringsEnum_1.UrlStringsEnum.DOT);
            stringBuffer = decoratorString.substring(dotPos + 1);
            cursor = stringBuffer.indexOf(DecoratorParser.OPEN_PARENTHESIS);
            decoratorName = stringBuffer.substring(0, cursor);
            cursor = decoratorString.indexOf(DecoratorParser.PARAM);
            if (cursor === -1 || cursor < decoratorString.indexOf(decoratorName)) {
                cursor = decoratorString.indexOf(DecoratorParser.NEW_LINE);
                classPath = this.getClassPath(decoratorString.substring(cursor + 1, dotPos).trim(), refs);
                props = DecoratorParser.BUILDER.build(decoratorName, decoratorString, classPath, DecoratorType_1.DecoratorType.MEMBER);
                result.push(props);
            }
        }
    }
    static findDecorators(file) {
        let result = new Array();
        let imports = DecoratorParser.PARSER.getImports(file);
        this.extractMembers(result, imports, file);
        this.extractFields(result, imports, file);
        return result;
    }
}
DecoratorParser.MEMBER_PATTERN = /__decorate\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\);/gm;
DecoratorParser.FIELD_PATTERN = /__param\(\d, (\w*).(\w*)/gm;
DecoratorParser.OPEN_PARENTHESIS = "(";
DecoratorParser.NEW_LINE = "\n";
DecoratorParser.PARAM = "__param";
DecoratorParser.PARSER = new ImportRefParser_1.ImportRefParser();
DecoratorParser.BUILDER = new DecoratorPropertiesBuilder_1.DecoratorPropertiesBuilder();
exports.DecoratorParser = DecoratorParser;
