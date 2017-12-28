#### 使用注意点

##### 1. __`thead`__ 格式

```js
// 默认名称
['ID', 'Name', 'Quantity', 'Price']

// 自定义HTML的名称
[
  'ID',
  {
    class: 'username',
    value: '<b>Name</b>',
    raw: true,
    align: 'center'
  },
  'Quantity',
  'Price'
]

// 多行表头
[
  [{
    value: 'Other',
    col: 4
  }],
  [{
    value: 'Age',
    row: 3
  }, {
    value: 'Address',
    col: 3
  }],
  [{
    value: 'Street',
    row: 2
  }, {
    value: 'Block',
    col: 2
  }],
  [
    'Building',
    'Door No.'
  ]
]
```

##### 2. __`tbody`__ 格式

```js
// 数据字段
['id', 'name', 'quantity', 'price']

// 动态 url 和 class，以及自定义HTML的字段
[
  'id',
  {
    class: 'username',
    field: 'name',
    url: (data) => {
      return `/user/${data.id}`;
    }
  },
  {
    field: 'quantity',
    class: (data) => {
      return data.quantity > 25 ? 'red' : 'green';
    }
  },
  {
    field: 'price',
    raw: true,
    fn: (data) => {
      return `$<b>${data.price}</b>`;
    }
  }
]
```

##### 3. __`tfoot`__ 格式

```js
[
  null, // 占位
  null, // 占位
  {
    field: 'quantity',
    fnName: 'sum' // 求和
  },
  {
    field: 'price',
    fnName: 'avg', // 求平均
    raw: true,
    fn: (result) => {
      let price = result.toFixed(3);
      return `<b style="color:gold">$</b>${price}`;
    }
  }
]
```

##### 4. __`action`__ 格式

```js
[{
  type: 'link',
  name: 'view',
  value: 'View',
  url: (data) => {
    return `/#/user/edit/${data.id}`
  }
}, {
  type: 'icon',
  name: 'edit',
  icon: 'edit' // 使用 Material图标 或 自定义图标 - value: '<i class="fa fa-edit"></i>'
}, {
  type: 'button',
  name: 'delete',
  value: 'Delete'
}]
```
