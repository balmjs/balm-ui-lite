```html
<ui-list class="demo-list-action">
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-primary>
      <ui-item-avatar>person</ui-item-avatar>
      <span>{{ item }}</span>
    </ui-item-primary>
    <ui-item-action>
      <a href="#">
        <ui-icon>star</ui-icon>
      </a>
    </ui-item-action>
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
.demo-list-action {
  width: 300px;
}
```
