import {Bootstrap} from "../../../src/com/jec/commons/startup/annotations/Bootstrap";
import {BootstrapScript} from "../../../src/com/jec/commons/startup/BootstrapScript";
import {JecContainer} from "../../../src/com/jec/commons/lang/JecContainer";

@Bootstrap()
export class BootstrapTestClass implements BootstrapScript {

  run(container:JecContainer): void {
    throw new Error("Method not implemented.");
  }
}
