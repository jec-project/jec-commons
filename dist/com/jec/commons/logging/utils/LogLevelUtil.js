"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("../LogLevel");
const LogLevelString_1 = require("./LogLevelString");
class LogLevelUtil {
    constructor() { }
    stringTogLevel(logLevel) {
        return LogLevel_1.LogLevel[logLevel];
    }
    logLevelToString(level) {
        let value = "";
        switch (level) {
            case LogLevel_1.LogLevel.TRACE:
                value = LogLevelString_1.LogLevelString.TRACE;
                break;
            case LogLevel_1.LogLevel.DEBUG:
                value = LogLevelString_1.LogLevelString.DEBUG;
                break;
            case LogLevel_1.LogLevel.INFO:
                value = LogLevelString_1.LogLevelString.INFO;
                break;
            case LogLevel_1.LogLevel.WARN:
                value = LogLevelString_1.LogLevelString.WARN;
                break;
            case LogLevel_1.LogLevel.ERROR:
                value = LogLevelString_1.LogLevelString.ERROR;
                break;
        }
        return value;
    }
}
exports.LogLevelUtil = LogLevelUtil;
;
