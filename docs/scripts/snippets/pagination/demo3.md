```html
<ui-pagination mini
  :record-count="list.recordCount"
  :page-size="list.pageSize"
  :page="list.page"
  prev="Prev"
  next="Next">
  <span>{{ list.page }}</span>
</ui-pagination>
```

```js
export default {
  data() {
    return {
      list: {
        data: [],
        recordCount: 100,
        pageSize: 5,
        page: 1
      }
    };
  }
};
```
