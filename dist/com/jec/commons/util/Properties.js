"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Properties {
    constructor(defaults) {
        this._properties = null;
        this.initObj(defaults);
    }
    initObj(defaults) {
        this._properties = new Map();
        if (defaults) {
            let keys = defaults.propertyNames();
            let len = keys.length;
            let key = null;
            while (len--) {
                key = keys[len];
                this.setProperty(key, defaults.getProperty(key));
            }
        }
    }
    propertyNames() {
        let result = Array.from(this._properties.keys());
        return result;
    }
    getProperty(key) {
        return this._properties.get(key);
    }
    setProperty(key, value) {
        let old = this._properties.get(key);
        this._properties.set(key, value);
        return old;
    }
}
exports.Properties = Properties;
