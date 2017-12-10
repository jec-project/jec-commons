import * as params from "../utilities/ScheduledParamsUtils";
import {Scheduled} from "../../../src/com/jec/commons/scheduling/annotations/Scheduled";

export class ScheduledTestClass {

  constructor(){}

  @Scheduled(params.CRON_PARAMS)
  public taskMethod():void {}
}