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
 * The <code>SchedulingConnectorRefs</code> class provides static constants that 
 * define the references of the JEC scheduling decorators API.
 */
export class SchedulingConnectorRefs {
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@Scheduled</code> decorator.
   */
  public static readonly SCHEDULED_CONNECTOR_REF:string =
                             "com.jec.commons.scheduling.annotations.Scheduled";                                      
}
