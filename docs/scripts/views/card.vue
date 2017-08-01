<template>
  <div class="demo-card">
    <div class="component-title">
      <h3>Card</h3>
      <p>Self-contained pieces of paper with data.</p>
    </div>

    <h4>Wide</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__wide">
              <ui-card class="demo-card-wide">
                <ui-card-title>
                  <template scope="props">
                    <h2 :class="props.className.title">Welcome</h2>
                  </template>
                </ui-card-title>
                <ui-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
                </ui-card-text>
                <ui-card-actions border>
                  <ui-button colored effect>Get Started</ui-button>
                </ui-card-actions>
                <ui-card-menu>
                  <ui-button icon="share" effect></ui-button>
                </ui-card-menu>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <h4>Square</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__square">
              <ui-card class="demo-card-square">
                <ui-card-title expand>
                  <template scope="props">
                    <h2 :class="props.className.title">Update</h2>
                  </template>
                </ui-card-title>
                <ui-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
                </ui-card-text>
                <ui-card-actions border>
                  <ui-button colored effect>View Updates</ui-button>
                </ui-card-actions>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <h4>Image &amp; Event</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__image">
              <ui-card class="demo-card-image">
                <ui-card-title expand></ui-card-title>
                <ui-card-actions>
                  <span class="demo-card-image__filename">Image.jpg</span>
                </ui-card-actions>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-card demo-card__event">
              <ui-card class="demo-card-event">
                <ui-card-title expand>
                  <h4>
                    Featured event:<br>
                    May 24, 2016<br>
                    7-11pm
                  </h4>
                </ui-card-title>
                <ui-card-actions border>
                  <ui-button colored effect>Add to Calendar</ui-button>
                  <div class="mdl-layout-spacer"></div>
                  <ui-icon>event</ui-icon>
                </ui-card-actions>
              </ui-card>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <ui-apidoc name="card"></ui-apidoc>
    <ui-apidoc name="card-title"></ui-apidoc>
    <ui-apidoc name="card-actions"></ui-apidoc>
    <ui-apidoc name="card-text"></ui-apidoc>
    <ui-apidoc name="card-media"></ui-apidoc>
    <ui-apidoc name="card-menu"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    this.showCode('card', 3);
  }
};
</script>
