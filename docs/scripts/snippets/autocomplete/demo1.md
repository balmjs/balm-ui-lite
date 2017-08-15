```html
<ui-autocomplete
  placeholder="Expand Text... (type 'a' or 'b')"
  :model="text"
  :url="url"
  :params="params"
  :suggestion="suggestion"
  :delay="500"
  @input="onInputChange"
  @response="onSuggest"
  @enter="onInputEnter">
</ui-autocomplete>
```

```js
export default {
  data() {
    return {
      text: '',
      url: `/api/test`,
      params: {},
      suggestion: [],
    }
  },
  methods: {
    onInputChange(value) {
      this.text = value;
      this.params = {
        text: value
      };
    },
    onSuggest(data) {
      this.suggestion = data[this.text] ? data[this.text] : [];
    },
    onInputEnter(data) {
      this.text = data.value;
    }
  }
};
```
