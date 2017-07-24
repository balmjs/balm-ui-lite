<template>
  <div class="page page--layout">

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__transparent">
              <!-- Uses a transparent header that draws on top of the layout's background -->
              <ui-layout class="demo-layout-transparent">
                <ui-layout-header transparent>
                  <ui-layout-header-row>
                    <ui-layout-title>Title</ui-layout-title>
                    <ui-layout-spacer></ui-layout-spacer>
                    <ui-navigation>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                    </ui-navigation>
                  </ui-layout-header-row>
                </ui-layout-header>
                <ui-layout-drawer>
                  <ui-layout-title>Title</ui-layout-title>
                  <ui-navigation>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                  </ui-navigation>
                </ui-layout-drawer>
                <ui-layout-content><!-- Content --></ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">Transparent header</div>
        </div>
      </div>
      <div class="snippet-code"></div>
    </div>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__fixed-drawer">
              <!-- No header, and the drawer stays open on larger screens (fixed drawer). -->
              <ui-layout fixedDrawer>
                <ui-layout-drawer>
                  <ui-layout-title>Title</ui-layout-title>
                  <ui-navigation>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                  </ui-navigation>
                </ui-layout-drawer>
                <ui-layout-content>
                  <div class="page-content"><!-- Your content goes here --></div>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">Fixed drawer, no header</div>
        </div>
      </div>
      <div class="snippet-code"></div>
    </div>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__fixed-header">
              <!-- Always shows a header, even in smaller screens. -->
              <ui-layout fixedHeader>
                <ui-layout-header>
                  <ui-layout-header-row>
                    <ui-layout-title>Title</ui-layout-title>
                    <ui-layout-spacer></ui-layout-spacer>
                    <ui-navigation largeScreenOnly>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                    </ui-navigation>
                  </ui-layout-header-row>
                </ui-layout-header>
                <ui-layout-drawer>
                  <ui-layout-title>Title</ui-layout-title>
                  <ui-navigation>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                  </ui-navigation>
                </ui-layout-drawer>
                <ui-layout-content>
                  <div class="page-content"><!-- Your content goes here --></div>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">Fixed header</div>
        </div>
      </div>
      <div class="snippet-code"></div>
    </div>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__fixed-header-drawer">
              <!-- The drawer is always open in large screens. The header is always shown, even in small screens. -->
              <ui-layout fixedDrawer fixedHeader>
                <ui-layout-header>
                  <ui-layout-header-row>
                    <ui-layout-spacer></ui-layout-spacer>
                    <!-- TODO -->
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                                mdl-textfield--floating-label mdl-textfield--align-right">
                      <label class="mdl-button mdl-js-button mdl-button--icon"
                             for="fixed-header-drawer-exp">
                        <i class="material-icons">search</i>
                      </label>
                      <div class="mdl-textfield__expandable-holder">
                        <input class="mdl-textfield__input" type="text" name="sample"
                               id="fixed-header-drawer-exp">
                      </div>
                    </div>
                  </ui-layout-header-row>
                </ui-layout-header>
                <ui-layout-drawer>
                  <ui-layout-title>Title</ui-layout-title>
                  <ui-navigation>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                  </ui-navigation>
                </ui-layout-drawer>
                <ui-layout-content>
                  <div class="page-content"><!-- Your content goes here --></div>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">Fixed header and drawer</div>
        </div>
      </div>
      <div class="snippet-code"></div>
    </div>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__scrolling-header">
              <!-- Uses a header that scrolls with the text, rather than staying locked at the top -->
              <ui-layout>
                <ui-layout-header scroll>
                  <ui-layout-header-row>
                    <ui-layout-title>Title</ui-layout-title>
                    <ui-layout-spacer></ui-layout-spacer>
                    <ui-navigation>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                    </ui-navigation>
                  </ui-layout-header-row>
                </ui-layout-header>
                <ui-layout-drawer>
                  <ui-layout-title>Title</ui-layout-title>
                  <ui-navigation>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                  </ui-navigation>
                </ui-layout-drawer>
                <ui-layout-content>
                  <div class="page-content"><!-- Your content goes here --></div>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">Scrolling header</div>
        </div>
      </div>
      <div class="snippet-code"></div>
    </div>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__waterfall-header">
              <!-- Uses a header that contracts as the page scrolls down. -->
              <ui-layout class="demo-layout-waterfall">
                <ui-layout-header waterfall>
                  <!-- Top row, always visible -->
                  <ui-layout-header-row>
                    <ui-layout-title>Title</ui-layout-title>
                    <ui-layout-spacer></ui-layout-spacer>
                    <!-- TODO -->
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                                mdl-textfield--floating-label mdl-textfield--align-right">
                      <label class="mdl-button mdl-js-button mdl-button--icon"
                             for="waterfall-exp">
                        <i class="material-icons">search</i>
                      </label>
                      <div class="mdl-textfield__expandable-holder">
                        <input class="mdl-textfield__input" type="text" name="sample"
                               id="waterfall-exp">
                      </div>
                    </div>
                  </ui-layout-header-row>
                  <!-- Bottom row, not visible on scroll -->
                  <ui-layout-header-row>
                    <ui-layout-spacer></ui-layout-spacer>
                    <!-- Navigation -->
                    <ui-navigation>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                      <a class="mdl-navigation__link" href="">Link</a>
                    </ui-navigation>
                  </ui-layout-header-row>
                </ui-layout-header>
                <ui-layout-drawer>
                  <ui-layout-title>Title</ui-layout-title>
                  <ui-navigation>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                    <a class="mdl-navigation__link" href="">Link</a>
                  </ui-navigation>
                </ui-layout-drawer>
                <ui-layout-content>
                  <div class="page-content"><!-- Your content goes here --></div>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">Waterfall header</div>
        </div>
      </div>
      <div class="snippet-code"></div>
    </div>

    <ui-apidoc name="layout"></ui-apidoc>
  </div>
</template>
