"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicDecoratorProperties_1 = require("../impl/BasicDecoratorProperties");
const UrlStringsEnum_1 = require("../../../util/UrlStringsEnum");
class DecoratorPropertiesBuilder {
    constructor() { }
    build(decorator, file, imports) {
        let result = new BasicDecoratorProperties_1.BasicDecoratorProperties();
        let dotPos = decorator.indexOf(UrlStringsEnum_1.UrlStringsEnum.DOT);
        let temp = decorator.substring(dotPos + 1);
        let cursor = temp.indexOf(DecoratorPropertiesBuilder.OPEN_PARENTHESIS);
        let classRef = null;
        let importRef = null;
        let classPath = null;
        let decoratorName = temp.substring(0, cursor);
        result.name = decoratorName;
        result.value = decorator;
        cursor = decorator.indexOf(DecoratorPropertiesBuilder.NEW_LINE);
        classRef = decorator.substring(cursor + 1, dotPos).trim();
        cursor = imports.length;
        while (cursor--) {
            importRef = imports[cursor];
            if (importRef.ref === classRef) {
                result.classPath = importRef.classPath;
                break;
            }
        }
        return result;
    }
}
DecoratorPropertiesBuilder.OPEN_PARENTHESIS = "(";
DecoratorPropertiesBuilder.NEW_LINE = "\n";
exports.DecoratorPropertiesBuilder = DecoratorPropertiesBuilder;
