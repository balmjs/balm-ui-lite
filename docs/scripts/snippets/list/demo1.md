```html
<ui-list class="demo-list-item">
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-primary>
      {{ item }}
    </ui-item-primary>
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

```css
.demo-list-item {
  width: 300px;
}
```
