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
 * Contains the different modes availables to specify the
 * <code>inspectMode</code> parameter of the <code>inspect()</code> method
 * defined by the <code>SourceFileInspector</code> interface.
 */
export enum InspectMode {

  /**
   * Indicates that the <code>SourceFileInspector</code> object only reads the
   * local files.
   */
  NONE = 0,

  /**
   * Indicates that the <code>SourceFileInspector</code> object reads the
   * local files and adds them to the cache.
   */
  FILL_CACHE = 1,

  /**
   * Indicates that the <code>SourceFileInspector</code> object only reads files
   * already in the cache.
   */
  READ_CACHE = 2
}