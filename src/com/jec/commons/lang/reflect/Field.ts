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

import {AbstractMember} from "./AbstractMember";
import {MemberType} from "./MemberType";

/**
 * The <code>Member</code> implementation for fields.
 */
export class Field extends AbstractMember {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>Field</code> instance.
   * 
   * @param {string} fieldName the name of the  the field represented by this
   *                           <code>Member</code>.
   * @param {any} declaringClass the object representing the class that declares
   *                             the field represented by this
   *                             <code>Member</code>.
   */
  constructor(fieldName:string, declaringClass:any) {
    super(fieldName, MemberType.FIELD, declaringClass);
  }
};
