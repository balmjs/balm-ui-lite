```html
<ui-autocomplete
  placeholder="try to type"
  v-model="keywords"
  :source="source"
  @selected="balmUI.onChange('keywords', $event.value)">
</ui-autocomplete>
```

```js
export default {
  data() {
    return {
      keywords: '',
      source: [
        'ActionScript',
        'AppleScript',
        'Asp',
        'BASIC',
        'C',
        'C++',
        'Clojure',
        'COBOL',
        'ColdFusion',
        'Erlang',
        'Fortran',
        'Groovy',
        'Haskell',
        'Java',
        'JavaScript',
        'Lisp',
        'Perl',
        'PHP',
        'Python',
        'Ruby',
        'Scala',
        'Scheme'
      ]
    };
  }
};
```
