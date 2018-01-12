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

import {AbstractMember} from "../../../src/com/jec/commons/lang/reflect/AbstractMember";
import {MemberType} from "../../../src/com/jec/commons/lang/reflect/MemberType";

/*!
 * This module constains utilities used by the AbstractMemberTest test suite.
 */

// Utilities:
export const NAME:string = "memberName";
export const TYPE:number = MemberType.METHOD;
export const CLASS:any = {};
class AbstractMemberImpl extends AbstractMember {
  constructor(){
    super(NAME, TYPE, CLASS);
  }
}
export const buildAbstractMember:Function = function():AbstractMember {
  let member:AbstractMember = new AbstractMemberImpl();
  return member;
};
