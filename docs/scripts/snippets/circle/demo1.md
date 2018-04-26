```html
<ui-circle
  size="200px"
  :animate="animate"
  :stroke="stroke"
  :strokeWidth="strokeWidth"
  :progress="progress"
  :progressWidth="progressWidth"
  :progressColor="progressColor"
  :strokeLinecap="strokeLinecap">
  {{progress}} %
</ui-circle>
```

```js
export default {
  data() {
    return {
      animate: true,
      progress: 0,
      progressColor: '#ff4081',
      stroke: '#e4e7f6',
      strokeLinecap: 1,
      strokeWidth: 20,
      progressWidth: 20,
      strokeLinecaps: [
        {
          key: 0,
          value: 'butt'
        },
        {
          key: 1,
          value: 'round'
        },
        {
          key: 2,
          value: 'square'
        }
      ]
    };
  }
};
```
