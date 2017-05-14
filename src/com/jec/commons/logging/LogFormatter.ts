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

/**
 * The <code>LogFormatter</code> interface defines the API you must implement to 
 * create log messages formatters for <code>Logger</code> objects.
 */
export interface LogFormatter {

  /**
   * Formats and returns the marker with the specified level information.
   *
   * @param {string} level the current level information.
   * @param {Object} marker the marker object to format.
   * @param {boolean} useAppender indicates whether to add a new line charater
   *                              at the end of the message (<code>true</code>), 
   *                              or not (<code>false</code>). Default value is
   *                              <code>false</code>.
   * @param {string} context an optional context information whis is added to
   *                         the log message.
   * @return {string} the formated string for the specified marker.
   */
  format(level:string, marker:any,
                                  useAppender?:boolean, context?:string):string;
};
