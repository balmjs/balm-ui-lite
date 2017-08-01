```html
<ui-list class="demo-list-action">
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-avatar>person</ui-item-avatar>
    {{ item }}
    <template slot="action">
      <ui-item-action>
        <a href="#">
          <ui-icon>star</ui-icon>
        </a>
      </ui-item-action>
    </template>
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
