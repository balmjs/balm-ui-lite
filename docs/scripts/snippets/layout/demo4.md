```html
<!-- The drawer is always open in large screens. The header is always shown, even in small screens. -->
<ui-layout fixedDrawer fixedHeader>
  <ui-layout-header>
    <ui-layout-header-row>
      <ui-layout-spacer></ui-layout-spacer>
      <ui-textfield
        expandable
        floatingLabel
        alignRight
        id="fixed-header-drawer-exp"></ui-textfield>
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
