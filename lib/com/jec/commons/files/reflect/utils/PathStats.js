"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PathStats {
    constructor(path) {
        this._path = null;
        this.directoriesNum = 0;
        this.filesNum = 0;
        this.processedFilesNum = 0;
        this.initObj(path);
    }
    initObj(path) {
        this._path = path;
    }
    getPath() {
        return this._path;
    }
}
exports.PathStats = PathStats;
;
