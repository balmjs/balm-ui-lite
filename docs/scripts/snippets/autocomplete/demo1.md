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
