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

import {MemberType} from "./MemberType";

/**
 * The <code>Member</code> interface reflects identifying information about a
 * single member (a field or a method) or a constructor. 
 */
export interface Member {

  /**
   * Returns the simple name of the underlying member or constructor represented
   * by this <code>Member</code>.
   */
  getName():string;

  /**
   * Returns the object representing the class that declares the member or
   * constructor represented by this <code>Member</code>.
   */
  getDeclaringClass():any;
  
  /**
   * Returns the type of the underlying member represented by this
   * <code>Member</code>.
   */
  getType():MemberType;
}