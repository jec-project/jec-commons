"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SchedulingError_1 = require("../exceptions/SchedulingError");
const UrlStringsEnum_1 = require("../../util/UrlStringsEnum");
class ScheduledParamsValidator {
    static validate(params) {
        let invalidNum = 0;
        if (!params.cron || params.cron === UrlStringsEnum_1.UrlStringsEnum.EMPTY_STRING) {
            invalidNum++;
        }
        if (!params.fixedDelay || params.fixedDelay <= 0) {
            invalidNum++;
        }
        if (!params.fixedRate || params.fixedRate <= 0) {
            invalidNum++;
        }
        if (invalidNum === 3) {
            throw new SchedulingError_1.SchedulingError("Invalid scheduling parameters: 'params' parameter must define one valid delay property.");
        }
    }
}
exports.ScheduledParamsValidator = ScheduledParamsValidator;
