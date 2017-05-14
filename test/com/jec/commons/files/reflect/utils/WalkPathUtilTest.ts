//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import "mocha";
import {expect} from "chai";
import {PathStats} from "../../../../../../../src/com/jec/commons/files/reflect/utils/PathStats";
import {FileProperties} from "../../../../../../../src/com/jec/commons/files/reflect/FileProperties";

// Class to test:
import {WalkPathUtil} from "../../../../../../../src/com/jec/commons/files/reflect/utils/WalkPathUtil";

// Test:
describe("WalkPathUtil", ()=> {

  describe("#walkSync()", ()=> {
    it("should traverse the path hierarchy and do files processing", function() {
      let pathUtil:WalkPathUtil = new WalkPathUtil();
      let processedFiles:number = 0;
      let stats:PathStats = pathUtil.walkSync(VALID_PATH, (file:FileProperties)=> {
        processedFiles++;
      });
      expect(stats.getPath()).to.equal(VALID_PATH);
      expect(stats.directoriesNum).to.equal(1);
      expect(stats.filesNum).to.equal(6);
      expect(processedFiles).to.equal(stats.processedFilesNum);
    });
  });
});

// Utilities:
const VALID_PATH:string = "./utils/test-utils/walkpath-test-utils";