<template>
  <div class="page--textfield">
    <div class="component-title">
      <h2>Text Field 输入框</h2>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 普通输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield
              id="sample1_1"
              alignRight
              label="Text..."
              v-model="text1_1"
            ></ui-textfield>
          </div>
          <div class="snippet-demo">
            <ui-textfield
              id="sample1_2"
              label="Number..."
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              v-model="text1_2"
            ></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>2. 浮动标签输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield
              id="sample2"
              labelFloating
              label="Text with floating label"
              v-model="text2"
            ></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>3. 文本域</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield
              id="sample3"
              type="textarea"
              label="Text lines..."
              :rows="3"
              v-model="text3"
            ></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>4. 可展开的输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div
              class="snippet-demo-container demo-textfield demo-textfield__textfield-expanding"
            >
              <ui-textfield
                id="sample4"
                expandable
                placeholder="Expandable Input"
                v-model="text4"
              >
                <!-- <template slot="icon">
                    <ui-icon>mood</ui-icon>
                  </template> -->
              </ui-textfield>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[4]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>5. 扩展操作输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield
              id="sample5_1"
              plus
              label="Plus Text..."
              v-model="text5_1"
            >
              <template slot="plus">
                <a href="javascript:void(0)">Link</a>
              </template>
            </ui-textfield>
          </div>
          <div class="snippet-demo">
            <ui-textfield
              id="sample5_2"
              plus
              label="Plus Text..."
              v-model="text5_2"
            >
              <template slot="plus">
                <ui-button link @click="$alert('Do something')"
                  >Button</ui-button
                >
              </template>
            </ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[5]"></ui-markdown>
      </ui-accordion>
    </div>

    <h4>6. 复古结构输入框</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demo">
          <p class="form-item">
            <label>Label Text:</label>
            <ui-textfield
              placeholder="Placeholder..."
              v-model="text6"
            ></ui-textfield>
          </p>
        </div>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[6]"></ui-markdown>
      </ui-accordion>
    </div>

    <ui-apidoc name="textfield"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

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
    };
  },
  created() {
    this.showCode('textfield', 6);
  }
};
</script>
