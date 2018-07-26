//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
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
import {JcadContext} from "../../../../../../src/com/jec/commons/jcad/JcadContext"; 
import {JcadContextError} from "../../../../../../src/com/jec/commons/jcad/exceptions/JcadContextError";

// Class to test:
import {JcadValidator} from "../../../../../../src/com/jec/commons/jcad/spi/JcadValidator";

// Test:
describe("JcadValidator", ()=> {

  describe("#validateContext()", ()=> {

    it("should throw a JcadContextError when the specified context parameter is 'null'", function() {
      const validator:JcadValidator = new JcadValidator();
      const doValidation:Function = function():void {
        validator.validateContext(null, "JcadContext");
      };
      expect(doValidation).to.throw(JcadContextError);
    });

    it("should throw a JcadContextError when the specified context parameter is 'undefined'", function() {
      const validator:JcadValidator = new JcadValidator();
      const doValidation:Function = function():void {
        validator.validateContext(undefined, "JcadContext");
      };
      expect(doValidation).to.throw(JcadContextError);
    });
    
    it("should do nothing when the context parameter is a valid context", function() {
      const validator:JcadValidator = new JcadValidator();
      const context:JcadContext = ({} as JcadContext);
      const doValidation:Function = function():void {
        validator.validateContext(context, "JcadContext")
      };
      expect(doValidation).to.not.throw();
    });
  });
});
