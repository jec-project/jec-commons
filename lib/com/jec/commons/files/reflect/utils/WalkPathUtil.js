"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilePropertiesBuilder_1 = require("./FilePropertiesBuilder");
const JecStringsEnum_1 = require("../../../util/JecStringsEnum");
const UrlStringsEnum_1 = require("../../../util/UrlStringsEnum");
const PathStats_1 = require("./PathStats");
const fs = require("fs");
class WalkPathUtil {
    constructor() { }
    walkSync(path, process, pathStats = null) {
        let pathStatsResult = pathStats || new PathStats_1.PathStats(path);
        let files = fs.readdirSync(path);
        let stats = null;
        let currPath = null;
        let fileProps = null;
        let extPos = -1;
        let filelength = -1;
        let rawFile = null;
        let extension = UrlStringsEnum_1.UrlStringsEnum.DOT + JecStringsEnum_1.JecStringsEnum.JS_EXTENSION;
        let builder = new FilePropertiesBuilder_1.FilePropertiesBuilder();
        files.forEach((file) => {
            currPath = path + UrlStringsEnum_1.UrlStringsEnum.SLASH + file;
            stats = fs.statSync(currPath);
            if (stats.isDirectory()) {
                pathStatsResult.directoriesNum++;
                this.walkSync(currPath, process, pathStatsResult);
            }
            else {
                filelength = file.length;
                extPos = filelength - 3;
                pathStatsResult.filesNum++;
                if (file.lastIndexOf(extension) === extPos) {
                    pathStatsResult.processedFilesNum++;
                    fileProps = builder.build(file, currPath, stats);
                    process(fileProps);
                }
            }
        });
        return pathStatsResult;
    }
}
exports.WalkPathUtil = WalkPathUtil;
;
