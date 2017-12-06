```js
const foo = () => alert('hello');
const bar = () => alert('BalmUI');

Vue.prototype.$notify.addButtonHandler('foo', foo);
Vue.prototype.$notify.addButtonHandler('bar', bar);

// or

Vue.prototype.$notify.addButtonHandler({
  name: 'foo',
  method: foo
});
Vue.prototype.$notify.addButtonHandler({
  name: 'bar',
  method: bar
});

// or

Vue.prototype.$notify.addButtonHandler([{
  name: 'foo',
  method: foo
}, {
  name: 'bar',
  method: bar
}]);

```
