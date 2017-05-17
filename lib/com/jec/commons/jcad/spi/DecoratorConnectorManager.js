"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingletonError_1 = require("../../exceptions/SingletonError");
const GuidGenerator_1 = require("../../lang/GuidGenerator");
class DecoratorConnectorManager {
    constructor() {
        this._connectorMap = null;
        this._id = null;
        if (DecoratorConnectorManager._locked ||
            global["__DecoratorConnectorManager__"]) {
            throw new SingletonError_1.SingletonError(DecoratorConnectorManager);
        }
        DecoratorConnectorManager._locked = true;
        this.initObj();
    }
    static getInstance() {
        if (global["__DecoratorConnectorManager__"] === undefined) {
            DecoratorConnectorManager._locked = false;
            global["__DecoratorConnectorManager__"] = new DecoratorConnectorManager();
        }
        return global["__DecoratorConnectorManager__"];
    }
    initObj() {
        let generator = new GuidGenerator_1.GuidGenerator();
        this._id = generator.generate();
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
    getId() {
        return this._id;
    }
}
DecoratorConnectorManager._locked = true;
DecoratorConnectorManager.PIPE = "|";
exports.DecoratorConnectorManager = DecoratorConnectorManager;
