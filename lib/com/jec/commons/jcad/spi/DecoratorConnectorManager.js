"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
class DecoratorConnectorManager {
    constructor() {
        this._connectorMap = null;
        if (DecoratorConnectorManager._locked || DecoratorConnectorManager.INSTANCE) {
            throw new SingletonError_1.SingletonError(DecoratorConnectorManager);
        }
        DecoratorConnectorManager._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (DecoratorConnectorManager.INSTANCE === null) {
            DecoratorConnectorManager._locked = false;
            DecoratorConnectorManager.INSTANCE = new DecoratorConnectorManager();
        }
        return DecoratorConnectorManager.INSTANCE;
    }
    initObj() {
        this._connectorMap = new Map();
    }
    buildRef(jcadRef, contextId) {
        return jcadRef + DecoratorConnectorManager.PIPE + contextId;
    }
    addConnector(connector, context) {
        let jcadRef = connector.getJcadReference();
        let ref = this.buildRef(jcadRef, context.getId());
        this._connectorMap.set(ref, connector);
        return jcadRef;
    }
    getConnector(jcadReference, context) {
        let ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.get(ref);
    }
    hasConnector(jcadReference, context) {
        let ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.has(ref);
    }
    getDecorator(jcadReference, context) {
        let ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.get(ref).getDecorator();
    }
    removeConnector(jcadReference, context) {
        let ref = this.buildRef(jcadReference, context.getId());
        return this._connectorMap.delete(ref);
    }
}
DecoratorConnectorManager.INSTANCE = null;
DecoratorConnectorManager._locked = true;
DecoratorConnectorManager.PIPE = "|";
exports.DecoratorConnectorManager = DecoratorConnectorManager;
