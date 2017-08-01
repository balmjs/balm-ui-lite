```html
<ui-list class="demo-list-item">
  <ui-item v-for="(item, index) in items" :key="index">
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
