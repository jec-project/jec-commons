"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicDecoratorProperties_1 = require("../impl/BasicDecoratorProperties");
class DecoratorPropertiesBuilder {
    constructor() { }
    build(name, value, classPath, decoratorType) {
        let result = new BasicDecoratorProperties_1.BasicDecoratorProperties();
        result.name = name;
        result.value = value;
        result.classPath = classPath;
        result.decoratorType = decoratorType;
        return result;
    }
}
exports.DecoratorPropertiesBuilder = DecoratorPropertiesBuilder;
