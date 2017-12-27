```html
<ui-table
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :action="action"
  hasDetailView
  @view-detail="balmUI.onChange('currentData', $event)"
  @view="onView"
  @edit="onEdit"
  @delete="onDelete">
  {{ table.currentData }}
</ui-table>
```

```js
export default {
  data() {
    return {
      currentData: {},
      data: [],
      thead: ['ID', 'Name', 'Quantity', 'Price', 'Operate'],
      tbody: ['id', 'name', 'quantity', 'price'],
      action: [{
        type: 'link',
        name: 'view', // @view
        value: 'View'
      }, {
        type: 'icon',
        name: 'edit', // @edit
        icon: 'edit',
      }, {
        type: 'button',
        name: 'delete', // @delete
        value: 'Delete'
      }]
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
