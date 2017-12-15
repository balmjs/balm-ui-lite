```html
<ui-pagination
  :record-count="list.recordCount"
  :page-size="list.pageSize"
  :page="list.page"
  show-record
  show-jumper
  jumper-before="Goto"
  jumper-after="page"
  jumper-button="Go"
  @change="balmUI.onChange('list.page', $event)">
  <template slot-scope="props">
    Showing {{ props.recordCount }} records,
    <ui-select
      :options="pageSizeList"
      optionValue="value"
      optionKey="key"
      :model="list.pageSize"
      @change="balmUI.onChange('list.pageSize', $event)">
      {{ props.pageSize }}
    </ui-select> records / page,
    {{ props.pageCount }} total pages
  </template>
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
      },
      pageSizeList: [{
        key: 5,
        value: 5
      }, {
        key: 10,
        value: 10
      }, {
        key: 15,
        value: 15
      }, {
        key: 20,
        value: 20
      }]
    };
  },
  methods: {
    onChangePageSize(option) {
      this.pageSize = option.key;
    }
  }
};
```
