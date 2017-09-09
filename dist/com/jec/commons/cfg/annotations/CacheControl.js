"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigConnectorRefs_1 = require("../jcad/ConfigConnectorRefs");
const JcadContextManager_1 = require("../../jcad/spi/JcadContextManager");
const DecoratorConnectorManager_1 = require("../../jcad/spi/DecoratorConnectorManager");
const DCM = DecoratorConnectorManager_1.DecoratorConnectorManager.getInstance();
const CTXM = JcadContextManager_1.JcadContextManager.getInstance();
function CacheControl(params) {
    return function (target) {
        var ctx = CTXM.getContext(ConfigConnectorRefs_1.ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF);
        return DCM.getDecorator(ConfigConnectorRefs_1.ConfigConnectorRefs.CACHE_CONTROL_CONNECTOR_REF, ctx).decorate(target, params);
    };
}
exports.CacheControl = CacheControl;
