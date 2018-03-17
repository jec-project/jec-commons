"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
const GlobalGuidGenerator_1 = require("../../lang/utils/GlobalGuidGenerator");
const JcadValidator_1 = require("./JcadValidator");
class DecoratorConnectorManager {
    constructor() {
        this._connectorMap = null;
        this._id = null;
        this._validator = null;
        if (DecoratorConnectorManager._locked ||
            global[DecoratorConnectorManager.GLOBAL_REF]) {
            throw new SingletonError_1.SingletonError(DecoratorConnectorManager);
        }
        DecoratorConnectorManager._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (global[DecoratorConnectorManager.GLOBAL_REF] === undefined) {
            DecoratorConnectorManager._locked = false;
            const ctx = new DecoratorConnectorManager();
            Object.defineProperty(global, DecoratorConnectorManager.GLOBAL_REF, {
                value: ctx,
                writable: false,
                enumerable: false,
                configurable: false
            });
        }
        return global[DecoratorConnectorManager.GLOBAL_REF];
    }
    initObj() {
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
        this._connectorMap = new Map();
        this._validator = new JcadValidator_1.JcadValidator();
    }
    buildRef(jcadRef, contextId) {
        return jcadRef + DecoratorConnectorManager.PIPE + contextId;
    }
    validate(context, contextType) {
        this._validator.validateContext(context, contextType);
    }
    addConnector(connector, context) {
        this.validate(connector, "DecoratorConnector");
        this.validate(context, "JcadContext");
        const jcadRef = connector.getJcadReference();
        const ref = this.buildRef(jcadRef, context.getId());
        this._connectorMap.set(ref, connector);
        return jcadRef;
    }
    getConnector(jcadReference, context) {
        this.validate(context, "JcadContext");
        const ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.get(ref);
    }
    hasConnector(jcadReference, context) {
        this.validate(context, "JcadContext");
        const ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.has(ref);
    }
    getDecorator(jcadReference, context) {
        this.validate(context, "JcadContext");
        const ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.get(ref).getDecorator();
    }
    removeConnector(jcadReference, context) {
        this.validate(context, "JcadContext");
        const ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.delete(ref);
    }
    getId() {
        return this._id;
    }
}
DecoratorConnectorManager._locked = true;
DecoratorConnectorManager.GLOBAL_REF = "__DecoratorConnectorManager__";
DecoratorConnectorManager.PIPE = "|";
exports.DecoratorConnectorManager = DecoratorConnectorManager;
