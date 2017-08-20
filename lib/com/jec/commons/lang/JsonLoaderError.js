"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonLoaderError extends Error {
    constructor(message) {
        super("JSON file loading error: \n" + message);
    }
}
exports.JsonLoaderError = JsonLoaderError;
;
