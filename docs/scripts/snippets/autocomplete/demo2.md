```html
<ui-autocomplete
  placeholder="type 'a' and 'b'"
  :model="keywords"
  :source="source"
  :delay="500"
  remote
  autoFocus
  @input="balmUI.onChange('keywords', $event)"
  @search="onSearch"
  @selected="balmUI.onChange('keywords', $event.value)">
</ui-autocomplete>
```

```js
export default {
  data() {
    return {
      url: 'api/test',
      keywords: '',
      source: []
    };
  },
  methods: {
    async onSearch(keywords) {
      let response = await this.$http.get(this.url, {
        params: {
          text: keywords
        }
      });
      let data = response.data;
      // mock data
      this.source = data[keywords] ? data[keywords] : [];
    }
  }
};
```
