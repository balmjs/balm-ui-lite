```html
<ui-list class="demo-list-three" three-line>
  <ui-item v-for="(item, index) in items" :key="index">
    <ui-item-primary>
      <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
      <span>{{ item.name }}</span>
      <ui-item-body>{{ item.text }}</ui-item-body>
    </ui-item-primary>
    <ui-item-secondary>
      <ui-item-action>
        <a href="#">
          <ui-icon>star</ui-icon>
        </a>
      </ui-item-action>
    </ui-item-secondary>
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
        text: 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.'
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul',
        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.'
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk',
        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".'
      }]
    };
  }
};
```

```css
.demo-list-three {
  width: 650px;
}
```
