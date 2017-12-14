```html
<ui-list class="demo-list-control">
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-primary>
      <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
      {{ item.name }}
    </ui-item-primary>
    <ui-item-action>
      <ui-checkbox v-if="index === 0" :value="item.id" :model="item.value"></ui-checkbox>
      <ui-radio v-if="index === 1" :value="item.id" :model="item.value"></ui-radio>
      <ui-switch v-if="index === 2" :value="true" :model="item.value"></ui-switch>
    </ui-item-action>
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
        value: true
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul',
        value: 0
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk',
        value: true
      }]
    };
  }
};
```

```css
.demo-list-control {
  width: 300px;
}
.demo-list-radio {
  display: inline;
}
```
