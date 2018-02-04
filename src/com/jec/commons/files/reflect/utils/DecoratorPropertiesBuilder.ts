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

import {DecoratorProperties} from "../DecoratorProperties";
import {BasicDecoratorProperties} from "../impl/BasicDecoratorProperties";
import {FileProperties} from "../FileProperties";
import {UrlStringsEnum} from "../../../util/UrlStringsEnum";
import {ImportRef} from "./ImportRef";
import {DecoratorType} from "./DecoratorType";

/**
 * A utility class that builds <code>DecoratorProperties</code> instances from 
 * decoratorString strings extracted from class files.
 */
export class DecoratorPropertiesBuilder {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>DecoratorPropertiesBuilder</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Builds and returns a new <code>DecoratorProperties</code> object from the
   * specified parameters.
   * 
   * @param {string} name the name of the new <code>DecoratorProperties</code>
   *                      object.
   * @param {string} value the value of the new <code>DecoratorProperties</code>
   *                       object.
   * @param {string} classPath the class path of the new 
   *                           <code>DecoratorProperties</code> object.
   * @param {DecoratorType} decoratorType the type of the new
   *                                      <code>DecoratorProperties</code>
   *                                      object.
   * @return {DecoratorProperties} a new <code>DecoratorProperties</code>
   *                               object.
   */
  public build(name:string, value:string, classPath:string,
                              decoratorType:DecoratorType):DecoratorProperties {
    let result:DecoratorProperties = new BasicDecoratorProperties();
    result.name = name;
    result.value = value;
    result.classPath = classPath;
    result.decoratorType = decoratorType;
    return result;
  }
}
