"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class DefaultLogFormatter {
    constructor() {
        this.appender = "\n";
        this.timeFormat = "MM/DD/YY HH:mm:ss.SSS";
    }
    format(level, marker, useAppender = false, context = "") {
        let time = moment().format(this.timeFormat);
        let msg = `[${time}]${context} ${level}: ${marker}`;
        if (useAppender)
            msg += this.appender;
        return msg;
    }
}
exports.DefaultLogFormatter = DefaultLogFormatter;
;
