<template>
  <div class="page--textfield">
    <div class="component-title">
      <h3>Text Field 输入框</h3>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 普通输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample1_1" alignRight
              label="Text..."
              :model="text1_1"
              @change="balmUI.onChange('text1_1', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo">
            <ui-textfield id="sample1_2"
              label="Number..."
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              :model="text1_2"
              @input="balmUI.onChange('text1_2', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <h4>2. 浮动标签输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample2"
              labelFloating
              label="Text with floating label"
              :model="text3"
              @input="balmUI.onChange('text3', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <h4>3. 文本域</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample3"
              type="textarea"
              label="Text lines..."
              :rows="3"
              :model="text4"
              @input="balmUI.onChange('text4', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
    </div>

    <h4>4. 可展开的输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-textfield demo-textfield__textfield-expanding">
              <ui-textfield id="sample4"
                expandable
                placeholder="Expandable Input"
                :model="text4"
                @input="balmUI.onChange('text4', $event)">
                  <!-- <template slot="icon">
                    <ui-icon>mood</ui-icon>
                  </template> -->
                </ui-textfield>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[4]"></ui-markdown>
    </div>

    <h4>5. 扩展操作输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample5_1"
              plus
              label="Plus Text..."
              :model="text5_1"
              @input="balmUI.onChange('text5_1', $event)">
              <template slot="plus">
                <a href="javascript:void(0)">Link</a>
              </template>
            </ui-textfield>
          </div>
          <div class="snippet-demo">
            <ui-textfield id="sample5_2"
              plus
              label="Plus Text..."
              :model="text5_2"
              @input="balmUI.onChange('text5_2', $event)">
              <template slot="plus">
                <ui-button link @click="$alert('Do something')">Button</ui-button>
              </template>
            </ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[5]"></ui-markdown>
    </div>

    <h4>6. 复古结构输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demo">
          <p class="form-item">
            <label>Label Text:</label>
            <ui-textfield
              placeholder="Placeholder..."
              :model="text6"
              @input="balmUI.onChange('text6', $event)"></ui-textfield>
          </p>
        </div>
      </div>
      <ui-markdown :code="code[6]"></ui-markdown>
    </div>

    <ui-apidoc name="textfield"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - <ui-textfield>'
  },
  data() {
    return {
      text1_1: '',
      text1_2: '',
      text2: '',
      text3: '',
      text4: '',
      text5_1: '',
      text5_2: '',
      text6: ''
    }
  },
  created() {
    this.showCode('textfield', 6);
  }
};
</script>
