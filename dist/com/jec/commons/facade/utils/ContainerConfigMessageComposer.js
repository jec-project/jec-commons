"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContainerConfigMessageComposer {
    constructor() { }
    compose(err, containerCfg) {
        let msg = "Invalid delegated container config:\n" + err;
        return msg;
    }
}
exports.ContainerConfigMessageComposer = ContainerConfigMessageComposer;
