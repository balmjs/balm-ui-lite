<template>
  <div class="page--card">
    <div class="component-title">
      <h3>Card 卡片</h3>
      <p>卡片式容器展示数据。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 普通卡片</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__wide">
              <ui-card class="demo-card-wide">
                <ui-card-head>
                  <ui-card-title>Welcome</ui-card-title>
                </ui-card-head>
                <ui-card-body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                </ui-card-body>
                <ui-card-actions border>
                  <ui-button colored>Get Started</ui-button>
                </ui-card-actions>
                <ui-card-menu>
                  <ui-button icon="share"></ui-button>
                </ui-card-menu>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">矩形</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__square">
              <ui-card class="demo-card-square">
                <ui-card-head expand>
                  <ui-card-title>Update</ui-card-title>
                </ui-card-head>
                <ui-card-body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                </ui-card-body>
                <ui-card-actions border>
                  <ui-button colored>View Updates</ui-button>
                </ui-card-actions>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">正方形</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <h4>2. 特殊卡片</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__image">
              <ui-card class="demo-card-image">
                <ui-card-head expand></ui-card-head>
                <ui-card-actions>
                  <span class="demo-card-image__filename">Image.jpg</span>
                </ui-card-actions>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__event">
              <ui-card class="demo-card-event">
                <ui-card-head expand>
                  <h4>
                    Featured event:<br>
                    May 24, 2016<br>
                    7-11pm
                  </h4>
                </ui-card-head>
                <ui-card-actions border>
                  <ui-button colored effect>Add to Calendar</ui-button>
                  <ui-layout-spacer></ui-layout-spacer>
                  <ui-icon>event</ui-icon>
                </ui-card-actions>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">图片</div>
          <div class="snippet-caption">事件</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
    </div>

    <ui-apidoc name="card"></ui-apidoc>
    <ui-apidoc name="card-head"></ui-apidoc>
    <ui-apidoc name="card-title"></ui-apidoc>
    <ui-apidoc name="card-subtitle"></ui-apidoc>
    <ui-apidoc name="card-media"></ui-apidoc>
    <ui-apidoc name="card-body"></ui-apidoc>
    <ui-apidoc name="card-actions"></ui-apidoc>
    <ui-apidoc name="card-menu"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - 卡片 <ui-card>'
  },
  created() {
    this.showCode('card', 3);
  }
};
</script>
