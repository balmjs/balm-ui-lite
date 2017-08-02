```html
<!-- Uses a header that contracts as the page scrolls down. -->
<ui-layout class="demo-layout-waterfall">
  <ui-layout-header waterfall>
    <!-- Top row, always visible -->
    <ui-layout-header-row>
      <ui-layout-title>Title</ui-layout-title>
      <ui-layout-spacer></ui-layout-spacer>
      <ui-textfield
        expandable
        floatingLabel
        alignRight
        id="waterfall-exp"></ui-textfield>
    </ui-layout-header-row>
    <!-- Bottom row, not visible on scroll -->
    <ui-layout-header-row>
      <ui-layout-spacer></ui-layout-spacer>
      <!-- Navigation -->
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
