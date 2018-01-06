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
import {JcadContextImpl} from "./JcadContextImpl";

/**
 * This <code>JcadContextFactory</code> creates and returns objects that 
 * implement the <code>JcadContext</code> interface.
 */
export class JcadContextFactory {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JcadContextFactory</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates and returns a new instance of the type of <code>JcadContext</code>.
   * 
   * @return {JcadContext} a new instance of the type of
   *                       <code>JcadContext</code>.
   */
  public create():JcadContext {
    let context:JcadContext = new JcadContextImpl();
    return context;
  }
}