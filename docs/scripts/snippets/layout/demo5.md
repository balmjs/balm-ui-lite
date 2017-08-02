```html
<!-- Uses a header that scrolls with the text, rather than staying locked at the top -->
<ui-layout>
  <ui-layout-header scroll>
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
  <ui-layout-content>
    <div class="page-content"><!-- Your content goes here --></div>
  </ui-layout-content>
</ui-layout>
```
