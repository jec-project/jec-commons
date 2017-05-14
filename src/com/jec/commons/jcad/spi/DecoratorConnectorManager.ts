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

import {SingletonError} from "../../exceptions/SingletonError";
import {DecoratorConnector} from "../DecoratorConnector";
import {Decorator} from "../Decorator";
import {JcadContext} from "../JcadContext";

/**
 * This singleton contains methods for creating context objects and objects 
 * referred to by naming information in the decorators connectors service.
 */
export class DecoratorConnectorManager {

  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>DecoratorConnectorManager</code> instance.
   */
  constructor() {
    if(DecoratorConnectorManager._locked || DecoratorConnectorManager.INSTANCE) {
      throw new SingletonError(DecoratorConnectorManager);
    }
    DecoratorConnectorManager._locked = true;
    this.initObj();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Singleton managment
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The <code>DecoratorConnectorManager</code> singleton instance reference.
   */
  private static INSTANCE:DecoratorConnectorManager = null;

  /**
   * Prevents <code>DecoratorConnectorManager</code> illegal instanciations.
   */
  private static _locked:boolean = true;

  /**
   * Returns a reference to the <code>DecoratorConnectorManager</code> singleton.
   * @return {DecoratorConnectorManager} a reference to the
   *                                    <code>DecoratorConnectorManager</code>
   *                                    singleton.
   */
  public static getInstance():DecoratorConnectorManager{
    if(DecoratorConnectorManager.INSTANCE === null) {
      DecoratorConnectorManager._locked = false;
      DecoratorConnectorManager.INSTANCE = new DecoratorConnectorManager();
    }
    return DecoratorConnectorManager.INSTANCE;
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * The reference to the 'pipe' (<code>|</code>) character.
   */
  private static readonly PIPE:string = "|";

  /**
   * A Map that contains all <code>DecoratorConnector</code> instances to be 
   * used through the JEC Connector API for Decorators.
   */
  private _connectorMap:Map<string, DecoratorConnector> = null;

  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initializes this object.
   */
  private initObj():void {
    this._connectorMap = new Map<string, DecoratorConnector>();
  }

  /**
   * Builds and returns the reference to a connector registered in this manager,
   * depending on the specified parameters.
   * 
   * @param {string} jcadRef the JCAD reference for the connector to find.
   * @param {string} contextId the context identifier associated to the
   *                           connector to find.
   * @return {string} the reference to the connector to find.
   */
  private buildRef(jcadRef:string, contextId:string):string {
    return jcadRef + DecoratorConnectorManager.PIPE + contextId;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Adds the specified connector to this connector manager.
   * 
   * @param {DecoratorConnector} connector the connector to add to this
   *                                       singleton.
   * @param {JcadContext} context the context associated with the connector to 
   *                              add.
   * @return {string} the string reference that must be used to retreive the
   *                  connector added to this connector manager.
   */
  public addConnector(connector:DecoratorConnector, context:JcadContext):string {
    let jcadRef:string = connector.getJcadReference();
    let ref:string = this.buildRef(jcadRef, context.getId());
    this._connectorMap.set(ref, connector);
    return jcadRef;
  }

  /**
   * Returns the <code>DecoratorConnector</code> instance registered with the 
   * specified reference and context.
   * 
   * @param {string} jcadReference the reference to the connector to find.
   * @param {JcadContext} context the context associated with the connector to 
   *                              find.
   * @return {DecoratorConnector} the <code>DecoratorConnector</code> instance  
   *                              registered with the specified reference and
   *                              context.
   */
  public getConnector(jcadReference:string,
                                       context:JcadContext):DecoratorConnector {
    let ref:string = this.buildRef(jcadReference, context.getId());
    return this._connectorMap.get(ref);
  }

  /**
   * Returns a boolean value that indicates whether a connector is registred in
   * this connector manager for the specified parameters (<code>true</code>), or 
   * not (<code>false</code>).
   * 
   * @param {string} jcadReference the reference to the connector to find.
   * @param {JcadContext} context the context associated with the connector to 
   *                              find.
   * @param {boolean} <code>true</code> whether a connector is registred in this
   *                  connector manager; <code>false</code> otherwhise.
   */
  public hasConnector(jcadReference:string, context:JcadContext):boolean {
    let ref:string = this.buildRef(jcadReference, context.getId());
    return this._connectorMap.has(ref);
  }

  /**
   * Returns the <code>Decorator</code> object associated with the
   * <code>DecoratorConnector</code> instance registered, with the specified
   * reference and context.
   * 
   * @param {string} jcadReference the reference to the connector for which to
   *                               return the decorator.
   * @param {JcadContext} context the context associated with the connector for 
   *                              which to return the decorator.
   * @return {Decorator} the decorator associated with the specified reference.
   */
  public getDecorator(jcadReference:string, context:JcadContext):Decorator {
    let ref:string = this.buildRef(jcadReference, context.getId());
    return this._connectorMap.get(ref).getDecorator();
  }
  
  /**
   * Removes the <code>DecoratorConnector</code> instance registered, with the 
   * specified reference and context.
   * 
   * @param {string} jcadReference the reference to the connector to remove.
   * @param {JcadContext} context the context associated with the connector to 
   *                              remove.
   * @return {boolean} <code>true</code> whether the specified connector has
   *                   been removed; <code>false</code> otherwise.
   */
  public removeConnector(jcadReference:string, context:JcadContext):boolean {
    let ref:string = this.buildRef(jcadReference, context.getId());
    return this._connectorMap.delete(ref);
  }
}