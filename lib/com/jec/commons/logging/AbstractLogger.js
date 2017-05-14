"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class AbstractLogger {
    constructor() {
        this.__logLevel = LogLevel_1.LogLevel.TRACE;
        this.__name = null;
    }
    isValidLogLevel(logLevel) {
        return (this.__logLevel <= logLevel);
    }
    getLogLevel() {
        return this.__logLevel;
    }
    setLogLevel(logLevel) {
        this.__logLevel = logLevel;
    }
    getName() {
        return this.__name;
    }
    setName(name) {
        this.__name = name;
    }
    debug(marker) { }
    error(marker) { }
    info(marker) { }
    trace(marker) { }
    warn(marker) { }
}
exports.AbstractLogger = AbstractLogger;
;
