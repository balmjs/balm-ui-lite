<template>
  <div class="page--textfield">
    <div class="component-title">
      <h3>Text Field</h3>
      <p>Textual input components.</p>
    </div>

    <h4>{{ $t('textfield.simple') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample1"
              label="Text..."
              :model="text1"
              @input="onChange('text1', $event)"></ui-textfield>
            {{ text1 }}
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <h4>{{ $t('textfield.pattern') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample2"
              label="Number..."
              pattern="-?[0-9]*(\.[0-9]+)?"
              error="Input is not a number!"
              :model="text2"
              @input="onChange('text2', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <h4>{{ $t('textfield.floating') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample3"
              labelFloating
              label="Floating Text..."
              :model="text3"
              @input="onChange('text3', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <h4>{{ $t('textfield.textarea') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield type="textarea" id="sample4"
              label="Text lines..."
              :rows="3"
              :model="text4"
              @input="onChange('text4', $event)"></ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[3]"></ui-markdown>
    </div>

    <h4>{{ $t('textfield.expandable') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-textfield demo-textfield__textfield-expanding">
            <ui-textfield id="sample5"
              label="Expandable Text..."
              expandable
              :model="text5"
              @input="onChange('text5', $event)">
            </ui-textfield>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[4]"></ui-markdown>
    </div>

    <h4>{{ $t('textfield.plus') }}</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-textfield id="sample6"
              label="Plus Text..."
              plus>
              <template slot="plus">
                <a href="javascript:void(0)">Link</a>
              </template>
            </ui-textfield>
          </div>
          <div class="snippet-demo">
            <ui-textfield id="sample7"
              label="Plus Text..."
              plus>
              <template slot="plus">
                <ui-button link>Button</ui-button>
              </template>
            </ui-textfield>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[5]"></ui-markdown>
    </div>

    <ui-apidoc name="textfield"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Textfield'
  },
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: ''
    }
  },
  created() {
    this.showCode('textfield', 6);
  }
};
</script>
