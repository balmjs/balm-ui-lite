<template>
  <div class="page--layout">
    <div class="component-title">
      <h3>Layout 布局</h3>
      <p>构建一个页面布局。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 普通布局</h4>

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
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">透明头部</div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
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
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">无头部 + 固定侧边菜单</div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
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
                    <ui-nav largeScreenOnly>
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
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">固定头部</div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
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
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">固定头部和侧边菜单</div>
        </div>
      </div>
      <ui-markdown :code="code[4]"></ui-markdown>
    </div>

    <h4>2. 滚动布局</h4>

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
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">可滚动头部</div>
        </div>
      </div>
      <ui-markdown :code="code[5]"></ui-markdown>
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
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">瀑布流头部</div>
        </div>
      </div>
      <ui-markdown :code="code[6]"></ui-markdown>
    </div>

    <h4>3. 选项卡布局</h4>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__scrollable-tabs">
              <!-- Simple header with scrollable tabs. -->
              <ui-layout fixedHeader :active="tab">
                <ui-layout-header>
                  <ui-layout-header-row>
                    <ui-layout-title>Title</ui-layout-title>
                  </ui-layout-header-row>
                  <!-- Tabs -->
                  <ui-layout-tab-bar @change="balmUI.onChange('tab', $event)">
                    <ui-layout-tab v-for="(item, index) in menu" :key="index">
                      {{ item }}
                    </ui-layout-tab>
                  </ui-layout-tab-bar>
                </ui-layout-header>
                <div class="mdl-layout__drawer">
                  <span class="mdl-layout-title">Title</span>
                </div>
                <ui-layout-content>
                  <ui-layout-tab-panel id="scroll-tab-1">
                    <div class="page-content">Content 1</div>
                  </ui-layout-tab-panel>
                  <ui-layout-tab-panel id="scroll-tab-2">
                    <div class="page-content">Content 2</div>
                  </ui-layout-tab-panel>
                  <ui-layout-tab-panel id="scroll-tab-3">
                    <div class="page-content">Content 3</div>
                  </ui-layout-tab-panel>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">可滚动选项卡</div>
        </div>
      </div>
      <ui-markdown :code="code[7]"></ui-markdown>
    </div>

    <div class="snippet-group is-full-width">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-layout demo-layout__fixed-tabs">
              <!-- Simple header with fixed tabs. -->
              <ui-layout fixedHeader fixedTabs :active="tab">
                <ui-layout-header>
                  <ui-layout-header-row>
                    <ui-layout-title>Title</ui-layout-title>
                  </ui-layout-header-row>
                  <!-- Tabs -->
                  <ui-layout-tab-bar @change="balmUI.onChange('tab', $event)">
                    <ui-layout-tab v-for="(item, index) in menu" :key="index">
                      {{ item }}
                    </ui-layout-tab>
                  </ui-layout-tab-bar>
                </ui-layout-header>
                <div class="mdl-layout__drawer">
                  <span class="mdl-layout-title">Title</span>
                </div>
                <ui-layout-content>
                  <ui-layout-tab-panel id="scroll-tab-1">
                    <div class="page-content">Content 1</div>
                  </ui-layout-tab-panel>
                  <ui-layout-tab-panel id="scroll-tab-2">
                    <div class="page-content">Content 2</div>
                  </ui-layout-tab-panel>
                  <ui-layout-tab-panel id="scroll-tab-3">
                    <div class="page-content">Content 3</div>
                  </ui-layout-tab-panel>
                </ui-layout-content>
              </ui-layout>
            </div>
          </div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption">固定选项卡</div>
        </div>
      </div>
      <ui-markdown :code="code[8]"></ui-markdown>
    </div>

    <ui-apidoc name="layout"></ui-apidoc>
    <ui-apidoc name="layout-header"></ui-apidoc>
    <ui-apidoc name="layout-header-row"></ui-apidoc>
    <ui-apidoc name="layout-title"></ui-apidoc>
    <ui-apidoc name="layout-spacer"></ui-apidoc>
    <ui-apidoc name="layout-drawer"></ui-apidoc>
    <ui-apidoc name="layout-content"></ui-apidoc>
    <ui-apidoc name="layout-tab-bar"></ui-apidoc>
    <ui-apidoc name="layout-tab"></ui-apidoc>
    <ui-apidoc name="layout-tab-panel"></ui-apidoc>
    <ui-apidoc name="nav"></ui-apidoc>
    <ui-apidoc name="nav-link"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - 布局 <ui-layout>'
  },
  data() {
    return {
      menu: ['Tab1', 'Tab2', 'Tab3'],
      tab: 0
    };
  },
  created() {
    this.showCode('layout', 8);
  }
};
</script>
