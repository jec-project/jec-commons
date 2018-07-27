"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalGuidGenerator_1 = require("../../../lang/utils/GlobalGuidGenerator");
class JecTimerImpl {
    constructor(callback, interval) {
        this._callback = null;
        this._interval = -1;
        this._nextTick = -1;
        this._timer = -1;
        this._id = null;
        this._bindTick = null;
        this.initObj(callback, interval);
    }
    start() {
        this._nextTick = this.now() + this._interval;
        this._timer = setTimeout(this._bindTick, this._interval);
    }
    stop() {
        clearTimeout(this._timer);
        this._timer = -1;
    }
    running() {
        return this._timer !== -1;
    }
    getId() {
        return this._id;
    }
    initObj(callback, interval) {
        this._callback = callback;
        this._interval = interval;
        this._bindTick = this.tick.bind(this);
        this._id = GlobalGuidGenerator_1.GlobalGuidGenerator.getInstance().generate();
    }
    now() {
        return Date.now();
    }
    tick() {
        const current = this.now();
        const drift = current - this._nextTick;
        const adjustment = Math.max(0, this._interval - drift);
        this._nextTick += this._interval;
        this._callback(current, this._nextTick);
        this._timer = setTimeout(this._bindTick, adjustment);
    }
}
exports.JecTimerImpl = JecTimerImpl;
