"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainersConfigLauncher_1 = require("./utils/ContainersConfigLauncher");
function ContainersConfig(params) {
    return function (target, key, descriptor) {
        const launcher = new ContainersConfigLauncher_1.ContainersConfigLauncher();
        let originalMethod = null;
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        originalMethod = descriptor.value;
        descriptor.value = function (jecContainer) {
            launcher.initContainers(params, jecContainer);
            originalMethod.call(this, jecContainer);
        };
        return descriptor;
    };
}
exports.ContainersConfig = ContainersConfig;
