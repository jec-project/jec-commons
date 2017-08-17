//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

import {BootstrapScript} from "../BootstrapScript";
import {Logger} from "jec-commons";

/**
 * The <code>BootstrapContext</code> interface defines a set of methods that use  
 * a <code>BootstrapScript</code> object to communicate with a domain container.
 */
export interface BootstrapContext {

  /**
   * Adds a <code>BootstrapScript</code> object to this <code>BootstrapContext</code>.
   * 
   * @param {BootstrapScript} script the <code>BootstrapScript</code> object to 
   *                                 add to this <code>BootstrapContext</code>.
   */
  addScript(script:BootstrapScript):void;

  /**
   * Returns the <code>BootstrapScript</code> object that matches the specified
   * name.
   * 
   * @param {string} name the name of the <code>BootstrapScript</code> object to
   *                      find.
   * @return {Jslet} the <code>BootstrapScript</code> object that matches the
   *                 specified URL, name <code>undefined</code> whether the
   *                 object does not exist.
   */
  getScript(name:string):Jslet;
  
  /**
   * Returns the status information for this <code>BootstrapContext</code> instance.
   * 
   * @return {Object} the status information for this <code>BootstrapContext</code>
   *                  instance.
   */
  getStatusInfo():any;

  /**
   * Returns the directory path for this <code>BootstrapContext</code> instance.
   * 
   * @return {string} the directory path for this <code>BootstrapContext</code>
   *                  instance.
   */
  getDirectoryPath():string;

  /**
   * Returns the source path for this <code>BootstrapContext</code> instance.
   * 
   * @return {string} the source path for this <code>BootstrapContext</code>
   *                  instance.
   */
  getSourcePath():string;
  
  /**
   * Returns the logger associated with this context.
   *
   * @return {Logger} the logger associated with this context.
   */
  getLogger():Logger;
}
