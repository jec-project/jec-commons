"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("../LogLevel");
const SingletonError_1 = require("../../exceptions/SingletonError");
class AbstractLoggerProxy {
    constructor(logContext) {
        this.__logger = null;
        this._logContext = null;
        this._logContext = logContext;
    }
    throwSingletonError(classRef) {
        throw new SingletonError_1.SingletonError(classRef);
    }
    getLogger() {
        return this.__logger;
    }
    setLogger(logger) {
        this.__logger = logger;
    }
    getLogContext() {
        return this._logContext;
    }
    log(message, logLevel = LogLevel_1.LogLevel.INFO) {
        switch (logLevel) {
            case LogLevel_1.LogLevel.INFO:
                this.__logger.info(message, this._logContext);
                break;
            case LogLevel_1.LogLevel.WARN:
                this.__logger.warn(message, this._logContext);
                break;
            case LogLevel_1.LogLevel.ERROR:
                this.__logger.error(message, this._logContext);
                break;
            case LogLevel_1.LogLevel.TRACE:
                this.__logger.trace(message, this._logContext);
                break;
            case LogLevel_1.LogLevel.OFF:
            case null:
            default:
                return;
        }
    }
}
exports.AbstractLoggerProxy = AbstractLoggerProxy;
;
