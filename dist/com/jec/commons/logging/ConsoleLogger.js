"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractLogger_1 = require("./AbstractLogger");
const LogLevel_1 = require("./LogLevel");
const LogLevelUtil_1 = require("./LogLevelUtil");
const DefaultLogFormatter_1 = require("./DefaultLogFormatter");
class ConsoleLogger extends AbstractLogger_1.AbstractLogger {
    constructor() {
        super();
        this._formatter = null;
        this.init();
    }
    init() {
        this._formatter = new DefaultLogFormatter_1.DefaultLogFormatter();
    }
    debug(marker, context = "") {
        if (this.isValidLogLevel(LogLevel_1.LogLevel.DEBUG)) {
            console.log(this._formatter.format(LogLevelUtil_1.LogLevelUtil.DEBUG, marker, false, context));
        }
    }
    error(marker, context = "") {
        if (this.isValidLogLevel(LogLevel_1.LogLevel.ERROR)) {
            console.log(this._formatter.format(LogLevelUtil_1.LogLevelUtil.ERROR, marker, false, context));
        }
    }
    info(marker, context = "") {
        if (this.isValidLogLevel(LogLevel_1.LogLevel.INFO)) {
            console.log(this._formatter.format(LogLevelUtil_1.LogLevelUtil.INFO, marker, false, context));
        }
    }
    trace(marker, context = "") {
        if (this.isValidLogLevel(LogLevel_1.LogLevel.TRACE)) {
            console.log(this._formatter.format(LogLevelUtil_1.LogLevelUtil.TRACE, marker, false, context));
        }
    }
    warn(marker, context = "") {
        if (this.isValidLogLevel(LogLevel_1.LogLevel.WARN)) {
            console.log(this._formatter.format(LogLevelUtil_1.LogLevelUtil.WARN, marker, false, context));
        }
    }
    toString() {
        return "[Logger::ConsoleLogger]";
    }
}
exports.ConsoleLogger = ConsoleLogger;
;
