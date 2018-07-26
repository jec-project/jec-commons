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
import {SchedulingError} from "../../../../../../src/com/jec/commons/scheduling/exceptions/SchedulingError";

// Class to test:
import {ScheduledParamsValidator} from "../../../../../../src/com/jec/commons/scheduling/utils/ScheduledParamsValidator";

// Test:
describe("ScheduledParamsValidatorTest", ()=> {

  describe("#validate", ()=> {
    it("Valid CRON should be validated", function() {
      const doValidate: Function = function():void {
        ScheduledParamsValidator.validate({
          cron: "0 0 * * *"
        });
      };
      expect(doValidate).to.not.throw();
    });

    it("Valid fixed delay should be validated", function() {
      const doValidate: Function = function():void {
        ScheduledParamsValidator.validate({ fixedDelay: 300 });
      };
      expect(doValidate).to.not.throw();
    });
    
    it("Valid fixed rate should be validated", function() {
      const doValidate: Function = function():void {
        ScheduledParamsValidator.validate({ fixedRate: 300 });
      };
      expect(doValidate).to.not.throw();
    });

    it("Empty CRON should not be validated", function() {
      const invalidParams:Function = function():void {
        ScheduledParamsValidator.validate( { cron: "" } );
      };
      expect(invalidParams).to.be.throw(SchedulingError);
    });

    it("Negative fixed delay should not be validated", function() {
      const invalidParams:Function = function():void {
        ScheduledParamsValidator.validate( { fixedDelay: -1 } );
      };
      expect(invalidParams).to.be.throw(SchedulingError);
    });
    
    it("Zero fixed delay should not be validated", function() {
      const invalidParams:Function = function():void {
        ScheduledParamsValidator.validate( { fixedDelay: 0 } );
      };
      expect(invalidParams).to.be.throw(SchedulingError);
    });
    
    it("Negative rate delay should not be validated", function() {
      const invalidParams:Function = function():void {
        ScheduledParamsValidator.validate( { fixedRate: -1 } );
      };
      expect(invalidParams).to.be.throw(SchedulingError);
    });
    
    it("Zero fixed rate should not be validated", function() {
      const invalidParams:Function = function():void {
        ScheduledParamsValidator.validate( { fixedRate: 0 } );
      };
      expect(invalidParams).to.be.throw(SchedulingError);
    });
  });
});