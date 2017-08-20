"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class LogLevelUtil {
    constructor() { }
    stringTogLevel(logLevel) {
        return LogLevel_1.LogLevel[logLevel];
    }
    logLevelToString(level) {
        let value = "";
        switch (level) {
            case LogLevel_1.LogLevel.TRACE:
                value = LogLevelUtil.TRACE;
                break;
            case LogLevel_1.LogLevel.DEBUG:
                value = LogLevelUtil.DEBUG;
                break;
            case LogLevel_1.LogLevel.INFO:
                value = LogLevelUtil.INFO;
                break;
            case LogLevel_1.LogLevel.WARN:
                value = LogLevelUtil.WARN;
                break;
            case LogLevel_1.LogLevel.ERROR:
                value = LogLevelUtil.ERROR;
                break;
        }
        return value;
    }
}
LogLevelUtil.TRACE = "TRACE";
LogLevelUtil.DEBUG = "DEBUG";
LogLevelUtil.INFO = "INFO";
LogLevelUtil.WARN = "WARN";
LogLevelUtil.ERROR = "ERROR";
exports.LogLevelUtil = LogLevelUtil;
;
