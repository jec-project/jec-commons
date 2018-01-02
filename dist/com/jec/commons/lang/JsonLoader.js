"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const EncodingFormat_1 = require("./utils/EncodingFormat");
const JsonLoaderError_1 = require("./JsonLoaderError");
class JsonLoader {
    constructor() {
        this.encodingFormat = EncodingFormat_1.EncodingFormat.UTF8;
    }
    loadSync(path) {
        let loadedString = null;
        let json = null;
        try {
            loadedString = fs.readFileSync(path, this.encodingFormat);
            json = JSON.parse(loadedString);
        }
        catch (e) {
            throw new JsonLoaderError_1.JsonLoaderError(e.toString());
        }
        return json;
    }
    load(path, success, error) {
        let json = null;
        fs.readFile(path, (err, data) => {
            if (err)
                error(new JsonLoaderError_1.JsonLoaderError(err.toString()));
            else {
                try {
                    json = JSON.parse(data.toString(this.encodingFormat));
                    success(json);
                }
                catch (e) {
                    error(new JsonLoaderError_1.JsonLoaderError(e.toString()));
                }
            }
        });
    }
}
exports.JsonLoader = JsonLoader;
;
