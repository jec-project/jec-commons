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

import {ScheduledParams} from "../annotations/core/ScheduledParams";
import {SchedulingError} from "../exceptions/SchedulingError";
import {UrlStringsEnum} from "../../util/UrlStringsEnum";

/**
 * Validates the members of the <code>ScheduledParams</code> interface.
 */
export class ScheduledParamsValidator {

  /**
   * Validates the <code>params</code> object.
   * 
   * @param {ScheduledParams} params the scheduling parameters to validate.
   */
  public static validate(params:ScheduledParams):void {
    let invalidNum:number = 0;
    if(!params.cron || params.cron === UrlStringsEnum.EMPTY_STRING) {
      invalidNum++;
    } if(!params.fixedDelay || params.fixedDelay <= 0) {
      invalidNum++;
    } if(!params.fixedRate || params.fixedRate <= 0) {
      invalidNum++;
    }
    if(invalidNum === 3) {
      throw new SchedulingError(
        "Invalid scheduling parameters: 'params' parameter must define one valid delay property."
      );
    }
  }
}