```html
<div class="image-list" v-lazy-load>
  <div class="item" v-for="image in images">
    <span :data-src="image"></span>
  </div>
</div>
```
