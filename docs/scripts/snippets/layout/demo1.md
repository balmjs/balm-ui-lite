```html
<!-- Uses a transparent header that draws on top of the layout's background -->
<ui-layout class="demo-layout-transparent">
  <ui-layout-header transparent>
    <ui-layout-header-row>
      <ui-layout-title>Title</ui-layout-title>
      <ui-layout-spacer></ui-layout-spacer>
      <ui-nav>
        <ui-nav-link href="">Link</ui-nav-link>
        <ui-nav-link href="">Link</ui-nav-link>
        <ui-nav-link href="">Link</ui-nav-link>
        <ui-nav-link href="">Link</ui-nav-link>
      </ui-nav>
    </ui-layout-header-row>
  </ui-layout-header>
  <ui-layout-drawer>
    <ui-layout-title>Title</ui-layout-title>
    <ui-nav>
      <ui-nav-link href="">Link</ui-nav-link>
      <ui-nav-link href="">Link</ui-nav-link>
      <ui-nav-link href="">Link</ui-nav-link>
      <ui-nav-link href="">Link</ui-nav-link>
    </ui-nav>
  </ui-layout-drawer>
  <ui-layout-content><!-- Content --></ui-layout-content>
</ui-layout>
```

```css
.demo-layout-transparent {
  background: url('../images/assets/demos/transparent.jpg') center / cover;
}
.demo-layout-transparent .mdl-layout__header,
.demo-layout-transparent .mdl-layout__drawer-button {
  /* This background is dark, so we set text to white. Use 87% black instead if
     your background is light. */
  color: white;
}
```
