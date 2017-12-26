```javascript
export class ScheduledTasks() {
  
  @Scheduled({
    cron:'0 17 * * 5'
  })
  public reportImportantEvent():void {
    console.log("Hi, it's Happy Hour!");
  }
}
```