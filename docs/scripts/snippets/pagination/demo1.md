```html
<ui-pagination
  :record-count="list.recordCount"
  :page-size="list.pageSize"
  v-model="list.page"
  show-jumper>
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
