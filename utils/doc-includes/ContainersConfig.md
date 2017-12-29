```javascript
@Bootstrap()
export class InitApp extends AbstractBootstrapScript {

  @ContainersConfig([
    { builder: SokokeBuilder },
    { builder: SandcatBuilder, error: "Invalid JARS config: <% error %>" }
  ])
  public run(container:JecContainer):void {}
}
```