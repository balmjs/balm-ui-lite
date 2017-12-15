<template>
  <div class="page--button">
    <div class="component-title">
      <h3>Button 按钮</h3>
      <p>可点击的按钮组件。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 圆形按钮 &lt;ui-button fab&gt;</h4>

    <!-- Demo 1 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button fab colored no-ripple>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab colored>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">着色</div>
          <div class="snippet-caption">波纹</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <!-- Demo 2 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button fab no-ripple>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab disabled>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">非着色</div>
          <div class="snippet-caption">波纹</div>
          <div class="snippet-caption">禁用</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <h4>2. 矩形按钮 &lt;ui-button raised&gt;</h4>

    <!-- Demo 3 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button raised no-ripple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised disabled>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">普通</div>
          <div class="snippet-caption">波纹</div>
          <div class="snippet-caption">禁用</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
    </div>

    <!-- Demo 4 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button raised colored no-ripple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised accent no-ripple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised accent>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">主色</div>
          <div class="snippet-caption">辅色</div>
          <div class="snippet-caption">辅色+波纹</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[4]"></ui-markdown>
    </div>

    <h4>3. 扁平化按钮 &lt;ui-button&gt;</h4>

    <!-- Demo 5 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button no-ripple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button disabled>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">普通</div>
          <div class="snippet-caption">波纹</div>
          <div class="snippet-caption">禁用</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[5]"></ui-markdown>
    </div>

    <!-- Demo 6 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button primary no-ripple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button accent no-ripple>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">主色</div>
          <div class="snippet-caption">辅色</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[6]"></ui-markdown>
    </div>

    <h4>4. 其他按钮</h4>

    <!-- Demo 7 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button icon="mood"></ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button icon="mood" colored></ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">普通</div>
          <div class="snippet-caption">着色</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[7]"></ui-markdown>
    </div>

    <!-- Demo 8 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button fab mini-fab>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab mini-fab colored>
              <ui-icon>add</ui-icon>
            </ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
        <div class="snippet-captions">
          <div class="snippet-caption-padding"></div>
          <div class="snippet-caption">小圆形</div>
          <div class="snippet-caption">小圆形+着色</div>
          <div class="snippet-caption-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[8]"></ui-markdown>
    </div>

    <!-- Demo 9 -->
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <ui-button link>Link</ui-button>
          </div>
        </div>
      </div>
      <ui-markdown :code="code[9]"></ui-markdown>
    </div>

    <ui-apidoc name="button"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-button>'
  },
  created() {
    this.showCode('button', 9);
  }
};
</script>
