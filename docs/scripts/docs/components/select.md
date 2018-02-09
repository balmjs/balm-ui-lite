#### 使用注意点

* **选项 key 值** 控制 表单数据
* **选项 value 值** 控制 页面展示

```js
// 默认选项列表数据格式
[
  {
    value: 1,
    label: 'A'
  },
  {
    value: 2,
    label: 'B'
  }
];

// 我们可以通过设置 optionKey = "key" 和 optionValue = "value" 转变格式为
[
  {
    key: 1,
    value: 'A'
  },
  {
    key: 2,
    value: 'B'
  }
];
```
