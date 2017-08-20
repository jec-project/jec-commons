"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InspectMode_1 = require("./InspectMode");
class InspectModeUtil {
    constructor() { }
    stringToInspectMode(inspectMode) {
        return InspectMode_1.InspectMode[inspectMode];
    }
    inspectModeToString(mode) {
        let value = "";
        switch (mode) {
            case InspectMode_1.InspectMode.NONE:
                value = InspectModeUtil.NONE;
                break;
            case InspectMode_1.InspectMode.FILL_CACHE:
                value = InspectModeUtil.FILL_CACHE;
                break;
            case InspectMode_1.InspectMode.READ_CACHE:
                value = InspectModeUtil.READ_CACHE;
                break;
        }
        return value;
    }
}
InspectModeUtil.NONE = "NONE";
InspectModeUtil.FILL_CACHE = "FILL_CACHE";
InspectModeUtil.READ_CACHE = "READ_CACHE";
exports.InspectModeUtil = InspectModeUtil;
;
