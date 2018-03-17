"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BootstrapConnectorRefs_1 = require("../jcad/BootstrapConnectorRefs");
const JcadContextManager_1 = require("../../jcad/spi/JcadContextManager");
const DecoratorConnectorManager_1 = require("../../jcad/spi/DecoratorConnectorManager");
const DCM = DecoratorConnectorManager_1.DecoratorConnectorManager.getInstance();
const CTXM = JcadContextManager_1.JcadContextManager.getInstance();
function Bootstrap(params) {
    return function (target) {
        const ctx = CTXM.getContext(BootstrapConnectorRefs_1.BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF);
        return DCM.getDecorator(BootstrapConnectorRefs_1.BootstrapConnectorRefs.BOOTSTRAP_CONNECTOR_REF, ctx)
            .decorate(target, params);
    };
}
exports.Bootstrap = Bootstrap;
