"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerConfigMessageComposer_1 = require("./ContainerConfigMessageComposer");
class ContainersConfigLauncher {
    constructor() { }
    launchContainer(containerCfg, jecContainer) {
        let builder = new containerCfg.builder;
        let container = builder.build(jecContainer);
        let composer = null;
        container.process((err) => {
            if (err) {
                composer = new ContainerConfigMessageComposer_1.ContainerConfigMessageComposer();
                throw new Error(composer.compose(err, containerCfg));
            }
        });
    }
    initContainers(config, jecContainer) {
        let len = config.length - 1;
        let i = 0;
        for (; i <= len; ++i) {
            this.launchContainer(config[i], jecContainer);
        }
    }
}
exports.ContainersConfigLauncher = ContainersConfigLauncher;
