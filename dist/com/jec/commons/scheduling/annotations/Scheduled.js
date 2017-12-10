"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SchedulingConnectorRefs_1 = require("../jcad/SchedulingConnectorRefs");
const JcadContextManager_1 = require("../../jcad/spi/JcadContextManager");
const DecoratorConnectorManager_1 = require("../../jcad/spi/DecoratorConnectorManager");
const ScheduledParamsValidator_1 = require("../utils/ScheduledParamsValidator");
const DCM = DecoratorConnectorManager_1.DecoratorConnectorManager.getInstance();
const CTXM = JcadContextManager_1.JcadContextManager.getInstance();
function Scheduled(params) {
    return function (target, key, descriptor) {
        ScheduledParamsValidator_1.ScheduledParamsValidator.validate(params);
        var ctx = CTXM.getContext(SchedulingConnectorRefs_1.SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF);
        return DCM.getDecorator(SchedulingConnectorRefs_1.SchedulingConnectorRefs.SCHEDULED_CONNECTOR_REF, ctx).decorate(target, key, descriptor, params);
    };
}
exports.Scheduled = Scheduled;
