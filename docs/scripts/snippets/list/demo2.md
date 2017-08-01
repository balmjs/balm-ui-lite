```html
<ui-list class="demo-list-icon">
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-icon>person</ui-item-icon>
    {{ item }}
  </ui-item>
</ui-list>
```

```js
export default {
  data() {
    return {
      items: [
        'Bryan Cranston',
        'Aaron Paul',
        'Bob Odenkirk'
      ]
    };
  }
};
```
