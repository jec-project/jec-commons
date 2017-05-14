"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImportRef_1 = require("./ImportRef");
class ImportRefParser {
    constructor() { }
    getImports(file) {
        let imports = new Array();
        let found = null;
        let importString = null;
        let importRef = null;
        let equalId = -1;
        let quotesId = -1;
        while (found = ImportRefParser.REQUIRE_PATTERN.exec(file)) {
            importString = found[0].trim();
            equalId = importString.indexOf(ImportRefParser.EQUAL);
            quotesId = importString.indexOf(ImportRefParser.DBL_QUOTES);
            importRef = new ImportRef_1.ImportRef();
            importRef.ref = importString.substring(6, equalId - 1);
            importRef.classPath =
                importString.substring(quotesId + 1, importString.length - 3);
            importRef.content = importString;
            imports.push(importRef);
        }
        return imports;
    }
}
ImportRefParser.REQUIRE_PATTERN = /^const\s(\w)*\s=\srequire\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\);/gm;
ImportRefParser.EQUAL = "=";
ImportRefParser.DBL_QUOTES = '"';
exports.ImportRefParser = ImportRefParser;
