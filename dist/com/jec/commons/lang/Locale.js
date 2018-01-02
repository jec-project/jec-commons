"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DASH = "-";
class Locale {
    constructor() {
        this._language = null;
        this._script = null;
        this._region = null;
    }
    getLanguage() {
        return this._language;
    }
    setLanguage(language) {
        this._language = language;
    }
    getScript() {
        return this._script;
    }
    setScript(script) {
        this._script = script;
    }
    getRegion() {
        return this._region;
    }
    setRegion(region) {
        this._region = region;
    }
    toString() {
        let loc = this._language;
        if (this._script)
            loc += this._script;
        loc += DASH + this._region;
        return loc;
    }
}
exports.Locale = Locale;
;
