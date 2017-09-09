
import {AbstractDecoratorConnector} from "../../../src/com/jec/commons/jcad/spi/AbstractDecoratorConnector";
import {Decorator} from "../../../src/com/jec/commons/jcad/Decorator";

export class ConfigConnector extends AbstractDecoratorConnector {
  
  constructor(jcadReference:string, decorator:Decorator) {
    super(jcadReference, decorator)
  }
}