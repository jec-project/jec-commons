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

import * as fs from "fs";
import {FileProperties} from "../FileProperties";
import {DecoratorProperties} from "..//DecoratorProperties";

/**
 * A Data Transfert Object that defines all properties of a file loaded whithin
 * a JEC source file inspector.
 */
export class BasicFileProperties implements FileProperties{
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>BasicFileProperties</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public name:string = null;
  
  /**
   * @inheritDoc
   */
  public path:string = null;
  
  /**
   * @inheritDoc
   */
  public extension:string = null;

  /**
   * @inheritDoc
   */
  public stats:fs.Stats = null;

  /**
   * @inheritDoc
   */
  public content:string = null;

  /**
   * @inheritDoc
   */
  public decorators:DecoratorProperties[] = null;
}
