//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {JecTimer} from "../JecTimer";
import {GlobalGuidGenerator} from "../../../lang/utils/GlobalGuidGenerator";

/**
 * The <code>JecTimerImpl</code> class represents the default implementation
 * of the <code>JecTimer</code> interface.
 */
export class JecTimerImpl implements JecTimer {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new instance of the <code>JecTimerImpl</code> class.
   * 
   * @param {Function} callback the callback function to be invoked at each
   *                            interval.
   * @param {number} interval the elapse of time after which to invoke the
   *                          callback function.
   */
  constructor(callback:Function, interval:number) {
    this.initObj(callback, interval);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The callback function to be invoked at each interval.
   */
  private _callback:Function = null;

  /**
   * The elapse of time after which to invoke the callback function.
   */
  private _interval:number = -1;

  /**
   * Represents the next timestamp, in milliseconds, at which the callback
   * function should be invoked.
   */
  private _nextTick:number = -1;

  /**
   * The reference to the current timer declared with the 
   * <code>setTimeout()</code> method.
   */
  private _timer:number = -1;

  /**
   * Indicates whether this timer is running (<code>true</code>), or not
   * (<code>false</code>).
   */
  private _isRunning:boolean = false;

  /**
   * The unique identifier of this timer.
   */
  private _id:string = null;

  /**
   * A reference to the <code>tick()</code> method, bound with this instance
   * of <code>JecTimerIml</code>.
   */
  private _bindTick:Function = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public start():void {
    this._nextTick = this.now() + this._interval;
    this._isRunning = true;
    this._timer = setTimeout(this._bindTick, this._interval);
  }

  /**
   * @inheritDoc
   */
  public stop():void {
    clearTimeout(this._timer);
    this._timer = -1;
    this._isRunning = false;
  }

  /**
   * @inheritDoc
   */
  public running():boolean {
    return this._isRunning;
  }

  public getId(): string {
    return this._id;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   *
   * @param {Function} callback the callback function to be invoked at each
   *                            interval.
   * @param {number} interval the elapse of time after which to invoke the
   *                          callback function.
   */
  private initObj(callback:Function, interval:number):void {
    this._callback = callback;
    this._interval = interval;
    this._bindTick = this.tick.bind(this);
    this._id = GlobalGuidGenerator.getInstance().generate();
  }

  /**
   * Returns an integer that represents the current timestamp, in milliseconds.
   * 
   * @return {number} the current timestamp, in milliseconds.
   */
  private now():number {
    return Date.now();
  }

  /**
   * The method executed at each new new interval invocation.
   */
  private tick():void {
    if(this._isRunning) {
      const current: number = this.now();
      const drift:number = current - this._nextTick;
      const adjustment:number = Math.max(0, this._interval - drift);
      this._nextTick += this._interval;
      this._callback(current, this._nextTick);
      this._timer = setTimeout(this._bindTick, adjustment);
    }
  }
}