"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractMember_1 = require("./AbstractMember");
const MemberType_1 = require("./MemberType");
class Constructor extends AbstractMember_1.AbstractMember {
    constructor(declaringClass) {
        super(declaringClass.name, MemberType_1.MemberType.CONSTRUCTOR, declaringClass);
    }
}
exports.Constructor = Constructor;
;
