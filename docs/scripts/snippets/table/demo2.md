```html
<ui-table
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :action="action"
  selectable="left"
  :checkedList="checkedList"
  @selected="balmUI.onChange('checkedList', $event)"
  @view="onView"
  @edit="onEdit"
  @delete="onDelete">
</ui-table>
```

```js
export default {
  data() {
    return {
      data: [],
      thead: [
        'ID',
        {
          value: 'Name',
          align: 'center'
        },
        'Quantity',
        'Price',
        {
          value: 'Operate',
          align: 'center'
        }
      ],
      tbody: [
        'id',
        {
          field: 'name',
          align: 'center',
          url(data) {
            return `/#/user/${data.id}`;
          }
        },
        {
          field: 'quantity',
          align: 'center',
          class(data) {
            return data.quantity > 20 ? 'green' : 'red';
          }
        },
        {
          field: 'price',
          align: 'right',
          raw: true,
          fn(data) {
            let price = data.price.toFixed(2);
            return `<b style="color:gold">$</b>${price}`;
          }
        }
      ],
      action: [{
        type: 'link',
        name: 'view', // 设置了url就会直接跳转，无需操作@view
        value: 'View',
        url(data) {
          return `#/user/${data.id}`;
        }
      }, {
        type: 'icon',
        name: 'edit', // @edit
        value: '<i class="fa fa-edit"></i>'
      }, {
        type: 'button',
        name: 'delete', // @delete
        value: 'Delete'
      }],
      checkedList: []
    }
  },
  methods: {
    onView(data) {
      console.log('view', data);
    },
    onEdit(data) {
      console.log('edit', data);
    },
    onDelete(data) {
      console.log('delete', data);
    }
  }
};
```
