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

import {ClassLoader} from "../ClassLoader";
import {ClassLoaderContext} from "../../context/spi/ClassLoaderContext";

/**
 * The <code>DefaultClassLoader</code> class is the default implementation of
 * the <code>ClassLoader</code> interface. 
 */
export class DefaultClassLoader implements ClassLoader {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>DefaultClassLoader</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public loadClass(path:string):any {
    ClassLoaderContext.getInstance().setPath(path);
    let classRef:any = require(path);
    ClassLoaderContext.getInstance().setPath(null);
    let props:string[] = Object.keys(classRef);
    let className:string = props[0];
    return classRef[className];
  }
}