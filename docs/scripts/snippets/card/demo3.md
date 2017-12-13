```html
<ui-card class="demo-card-image">
  <ui-card-head expand></ui-card-head>
  <ui-card-actions>
    <span class="demo-card-image__filename">Image.jpg</span>
  </ui-card-actions>
</ui-card>
```

```css
.demo-card-image.mdl-card {
  width: 256px;
  height: 256px;
  background: url('../images/assets/demos/image_card.jpg') center / cover;
}
.demo-card-image>.mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, .2);
}
.demo-card-image__filename {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
```

---

```html
<ui-card class="demo-card-event">
  <ui-card-head expand>
    <h4>
      Featured event:<br>
      May 24, 2016<br>
      7-11pm
    </h4>
  </ui-card-head>
  <ui-card-actions border>
    <ui-button colored>Add to Calendar</ui-button>
    <ui-layout-spacer></ui-layout-spacer>
    <ui-icon>event</ui-icon>
  </ui-card-actions>
</ui-card>
```

```css
.demo-card-event.mdl-card {
  width: 256px;
  height: 256px;
  background: #3e4eb8;
}
.demo-card-event>.mdl-card__actions {
  border-color: rgba(255, 255, 255, .2);
}
.demo-card-event>.mdl-card__title {
  align-items: flex-start;
}
.demo-card-event>.mdl-card__title>h4 {
  margin-top: 0;
}
.demo-card-event>.mdl-card__actions {
  display: flex;
  box-sizing: border-box;
  align-items: center;
}
.demo-card-event>.mdl-card__actions>.material-icons {
  padding-right: 10px;
}
.demo-card-event>.mdl-card__title,
.demo-card-event>.mdl-card__actions,
.demo-card-event>.mdl-card__actions>.mdl-button {
  color: #fff;
}
```
