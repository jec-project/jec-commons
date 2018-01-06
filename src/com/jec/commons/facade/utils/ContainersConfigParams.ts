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

/**
 * The <code>ContainersConfigParams</code> interface defines the API you must 
 * implement to create objects passed as parameter of the
 * <code>@ContainersConfig</code> decorator.
 */
export interface ContainersConfigParams {
  
  /**
   * The reference to the builder class that is used to initialize a 3rd party  
   * JEC containers. The <code>builder</code> class must implement the
   * <code>DelegatedContainerBuilder</code> interface.
   */
  builder:any;

  /**
   * Specifies the error message displayed when the initialization of a 3rd
   * party JEC containers fails.
   */
  error?:string;
}
