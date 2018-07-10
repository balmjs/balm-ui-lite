```html
<ui-radio name="sex"
  value="M"
  v-model="gender">Male</ui-radio>

<ui-radio name="sex"
  value="F"
  v-model="gender">Female</ui-radio>

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
