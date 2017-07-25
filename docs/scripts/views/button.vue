<template>
  <div class="demo-button">
    <div class="component-title">
      <h3>Button</h3>
      <p>Variations on Material Design buttons.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button fab colored noRipple>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab colored>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button fab noRipple>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab disabled>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button raised noRipple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised disabled>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button raised colored noRipple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised accent noRipple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button raised accent>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[3]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button noRipple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button disabled>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[4]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button primary noRipple>Button</ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button accent noRipple>Button</ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[5]"></ui-markdown>
    </div>

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
      </div>
      <ui-markdown :text="code[6]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <ui-button fab mini-fab noRipple>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo">
            <ui-button fab mini-fab colored noRipple>
              <i class="material-icons">add</i>
            </ui-button>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[7]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo">
            <ui-button link>Link</ui-button>
          </div>
        </div>
      </div>
      <ui-markdown :text="code[8]"></ui-markdown>
    </div>

    <ui-apidoc name="button"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    this.showCode('button', 9);
  }
};
</script>
