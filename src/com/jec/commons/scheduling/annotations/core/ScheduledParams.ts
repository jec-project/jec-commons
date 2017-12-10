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

/**
 * The <code>ScheduledParams</code> interface defines the API you must implement
 * to create objects passed as parameter of the JEC <code>@Scheduled<code>
 * decorator.
 */
export interface ScheduledParams {

  /**
   * Specifies a CRON expression for scheduling a task.
   */
  cron?:string;

  /**
   * Specifies the duration between the end of last execution and the start of
   * next execution.
   */
  fixedDelay?:number;
  
  /**
   * Allows to execute a task at a fixed interval of time.
   */
  fixedRate?:number;
  
  /**
   * Specifies the interval of time after the task will be executed for the
   * first time.
   */
  initialDelay?:number;
}
