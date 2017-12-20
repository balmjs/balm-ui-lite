```html
<ui-autocomplete
  placeholder="try to type"
  :model="keywords"
  :source="source"
  @input="balmUI.onChange('keywords', $event)"
  @selected="balmUI.onChange('keywords', $event.value)">
</ui-autocomplete>
```

```js
export default {
  data() {
    return {
      keywords: '',
      source: [ 'c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby' ]
    };
  }
};
```
