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

import {FileStats} from "../FileStats";
import {DecoratorProperties} from "./DecoratorProperties";

/**
 * Defines the API for Data Transfert Object that describe all properties of a 
 * file loaded by a JEC source file inspector.
 */
export interface FileProperties {

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The name of the file.
   */
  name:string;
  
  /**
   * The path of the file.
   */
  path:string;
  
  /**
   * The file extension.
   */
  extension:string;

  /**
   * The <code>FileStats</code> instance associated with this file.
   */
  stats:FileStats;

  /**
   * The content of the file as a string.
   */
  content:string;

  /**
   * An array that contains all decorators available from the loaded file.
   */
  decorators:DecoratorProperties[];
}
