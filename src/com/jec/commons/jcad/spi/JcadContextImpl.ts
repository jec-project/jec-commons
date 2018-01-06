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

import {JcadContext} from "../JcadContext";
import {GuidGenerator} from "../../lang/GuidGenerator";
import {GuidGeneratorBase} from "../../lang/utils/GuidGeneratorBase";

/**
 * The default implementation of the <code>JcadContext</code> interface.
 */
export class JcadContextImpl implements JcadContext {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JcadContextImpl</code> instance.
   */
  constructor() {
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The GUID for this <code>JcadContext</code> object.
   */
  private _id:string = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    let generator:GuidGenerator = new GuidGeneratorBase();
    this._id = generator.generate();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////
  
  /**
   * @inheritDoc
   */
  public getId():string {
    return this._id;
  }
}