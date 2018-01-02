"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Locale_1 = require("../Locale");
class LocaleBuilder {
    constructor() {
        this._language = null;
        this._script = null;
        this._region = null;
    }
    setLanguage(language) {
        this._language = language;
        return this;
    }
    setScript(script) {
        this._script = script;
        return this;
    }
    setRegion(region) {
        this._region = region;
        return this;
    }
    clear() {
        this._language = null;
        this._script = null;
        this._region = null;
    }
    build() {
        let locale = new Locale_1.Locale();
        locale.setLanguage(this._language);
        locale.setScript(this._script);
        locale.setRegion(this._region);
        return locale;
    }
}
exports.LocaleBuilder = LocaleBuilder;
;
