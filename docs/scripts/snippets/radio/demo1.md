```html
<ui-radio name="sex"
  value="M"
  :model="gender"
  @change="balmUI.onChange('gender', $event)">Male</ui-radio>

<ui-radio name="sex"
  value="F"
  :model="gender"
  @change="balmUI.onChange('gender', $event)">Female</ui-radio>

<span>Picked: {{ gender }}</span>
```

```js
export default {
  data() {
    return {
      gender: ''
    };
  }
};
```
