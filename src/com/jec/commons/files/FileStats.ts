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
 * The <code>FileStats<code> interface defines the default set of APIs 
 * that must be implemented for creting objects that provides system information
 * about files or directories.
 */
export interface FileStats {

  //////////////////////////////////////////////////////////////////////////////
  // Public getter properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the ID of device containing file.
   */
  dev:number;

  /**
   * Returns the inode number.
   */
  ino:number;

  /**
   * Indicates the protection mode for this file.
   */
  mode:number;

  /**
   * Indicates number of hard links for this file.
   */
  nlink:number;

  /**
   * Returns the user ID of the file owner.
   */
  uid:number;

  /**
   * Returns the group ID of the file owner.
   */
  gid:number;

  /**
   * Returns the device ID (if special file).
   */
  rdev:number;

  /**
   * Returns the total size the file, in bytes.
   */
  size:number;

  /**
   * Returns the blocksize for filesystem I/O.
   */
  blksize:number;

  /**
   * Returns the number of blocks allocated.
   */
  blocks:number;

  /**
   * Returns time when file data last accessed.
   */
  atime:Date;

  /**
   * Returns time when file data last modified.
   */
  mtime:Date;

  /**
   * Returns time when file status was last changed (inode data modification).
   */
  ctime:Date;
  
  /**
   * Returns of file creation. Set once when the file is created.
   */
  birthtime:Date;
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a boolean that indicates whether the associated item is a file
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a file;
   *                   <code>false</code> otherwise.
   */
  isFile():boolean;

  /**
   * Returns a boolean that indicates whether the associated item is a directory
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a
   *                   directory; <code>false</code> otherwise.
   */
  isDirectory():boolean;
  
  /**
   * Returns a boolean that indicates whether the associated item is a block
   * device (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a block
   *                   device; <code>false</code> otherwise.
   */
  isBlockDevice():boolean;
  
  /**
   * Returns a boolean that indicates whether the associated item is a character
   * device (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a
   *                   character device; <code>false</code> otherwise.
   */
  isCharacterDevice():boolean;
  
  /**
   * Returns a boolean that indicates whether the associated item is a symbolic
   * link (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a
   *                   symbolic link; <code>false</code> otherwise.
   */
  isSymbolicLink():boolean;
  
  /**
   * Returns a boolean that indicates whether the associated item is a fifo file
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a fifo
   *                   file; <code>false</code> otherwise.
   */
  isFIFO():boolean;
  
  /**
   * Returns a boolean that indicates whether the associated item is a socket
   * (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether the associated item is a 
   *                   socket; <code>false</code> otherwise.
   */
  isSocket():boolean;
}
