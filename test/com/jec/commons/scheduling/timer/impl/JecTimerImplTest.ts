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
import {JecTimer} from "../../../../../../../src/com/jec/commons/scheduling/timer/JecTimer";

// Class to test:
import {JecTimerImpl} from "../../../../../../../src/com/jec/commons/scheduling/timer/impl/JecTimerImpl";

// Utilities:
import {GuidTestUtils} from "../../../../../../../utils/test-utils/utilities/GuidTestUtils";

// Test:
describe("JecTimerImpl", ()=> {

  const interval:number = 100;

  describe("#start()", ()=> {
    it("should start the timer", function(done:Function) {
      this.timeout(500);
      const timer:JecTimer = new JecTimerImpl(
        () => {
          timer.stop();
          done();
        },
        interval
      );
      timer.start();
    });
  });

  describe("#stop()", ()=> {
    it("should stop the timer", function(done:Function) {
      this.timeout(1000);
      let idx:number = 0;
      const timer:JecTimer = new JecTimerImpl(
        () => {
          idx++;
          timer.stop();
          setTimeout(()=> {
            expect(idx).to.equal(1);
            done();
          }, 500);
        },
        interval
      );
      timer.start();
    });
  });

  describe("#running()", ()=> {
    it("should be false by default", function() {
      const timer:JecTimer = new JecTimerImpl(() => {}, interval);
      expect(timer.running()).to.be.false;
    });

    it("should be true when running", function(done:Function) {
      this.timeout(500);
      const timer:JecTimer = new JecTimerImpl(
        () => {
          expect(timer.running()).to.be.true;
          timer.stop();
          done();
        },
        interval
      );
      timer.start();
    });
    
    it("should be false when stoped", function(done:Function) {
      this.timeout(500);
      const timer:JecTimer = new JecTimerImpl(
        () => {
          timer.stop();
          expect(timer.running()).to.be.false;
          done();
        },
        interval
      );
      timer.start();
    });
  });
  
  describe("#getId()", ()=> {
    it("should always return a valid GUID", function() {
      this.retries(10);
      const timer:JecTimer = new JecTimerImpl(() => {}, interval);
      const guid:string = timer.getId();
      expect(guid).to.be.a("string");
      expect(GuidTestUtils.GUID_VALIDATOR.test(guid)).to.equal(true);
    });
  });

  describe("#callback(current, next)", ()=> {
    it("'next' should be higher than 'current'", function(done:Function) {
      this.timeout(500);
      const timer:JecTimer = new JecTimerImpl(
        (current:number, next:number) => {
          timer.stop();
          expect(next > current).to.be.true;
          done();
        },
        interval
      );
      timer.start();
    });
    it("should be close to the current time", function(done:Function) {
      this.timeout(500);
      const timer:JecTimer = new JecTimerImpl(
        (current:number, next:number) => {
          timer.stop();
          const now:number = Date.now();
          expect(current).to.be.within(now -10, now + 10);
          done();
        },
        interval
      );
      timer.start();
    });
  });
});