 ```javascript
@CacheControl({
  urlPattern: "/my/url/*",
  noCache: true,
  noStore: true,
  mustRevalidate: true
})
export class MyConfigClass() {}
```