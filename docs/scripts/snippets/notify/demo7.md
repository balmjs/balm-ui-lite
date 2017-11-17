```js
const foo = () => alert('hello');
const bar = () => alert('BalmUI');

Vue.prototype.$notify.addBtnHandler('foo', foo);
Vue.prototype.$notify.addBtnHandler('bar', bar);

// or

Vue.prototype.$notify.addBtnHandler({
  name: 'foo',
  methos: foo
});
Vue.prototype.$notify.addBtnHandler({
  name: 'bar',
  methos: bar
});

// or

Vue.prototype.$notify.addBtnHandler([{
  name: 'foo',
  methos: foo
}, {
  name: 'bar',
  methos: bar
}]);

```
