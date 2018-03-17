"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContainerConfigMessageComposer {
    constructor() { }
    compose(err, containerCfg) {
        return "Invalid delegated container config:\n" + err;
    }
}
exports.ContainerConfigMessageComposer = ContainerConfigMessageComposer;
