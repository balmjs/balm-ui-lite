```html
<ui-list class="demo-list-two" twoLine>
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
    <span>{{ item.name }}</span>
    <ui-item-subtitle>62 Episodes</ui-item-subtitle>
    <template slot="action">
      <ui-item-info>{{ item.info }}</ui-item-info>
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
      items: [{
        id: 1,
        avatar: 'person',
        name: 'Bryan Cranston',
        info: 'Actor'
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul'
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk'
      }]
    };
  }
};
```
