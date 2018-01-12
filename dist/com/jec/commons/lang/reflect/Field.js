"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMember_1 = require("./AbstractMember");
const MemberType_1 = require("./MemberType");
class Field extends AbstractMember_1.AbstractMember {
    constructor(fieldName, declaringClass) {
        super(fieldName, MemberType_1.MemberType.FIELD, declaringClass);
    }
}
exports.Field = Field;
;
