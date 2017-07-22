<template>
  <div class="demo-card">
    <div class="component-title">
      <h3>Card</h3>
      <p>Self-contained pieces of paper with data.</p>
    </div>

    <h4>Wide</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
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
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Square</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
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
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Image &amp; Event</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card class="demo-card-image">
          <ui-card-title expand></ui-card-title>
          <ui-card-actions>
            <span class="demo-card-image__filename">Image.jpg</span>
          </ui-card-actions>
        </ui-card>
      </div>
      <div class="snippet-demo">
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
            <i class="material-icons">event</i>
          </ui-card-actions>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>A card (no shadow) with a title, image, text, and action.</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card>
          <ui-card-title>
            <template scope="props">
              <h2 :class="props.className.title">
                Auckland Sky Tower<br>
                Auckland, New Zealand
              </h2>
            </template>
          </ui-card-title>
          <ui-card-text>
            The Sky Tower is an observation and telecommunications tower located in Auckland, New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure in the Southern Hemisphere.
          </ui-card-text>
          <ui-card-actions>
            <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
          </ui-card-actions>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>Card (level-3 shadow) with an image, caption, and text:</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card :dp="4">
          <ui-card-media>
            <img :src="require('../../images/assets/demos/welcome_card.jpg')" width="173" height="157" border="0" alt="" style="padding:10px;">
          </ui-card-media>
          <ui-card-text>
            Auckland Sky Tower, taken March 24th, 2014
          </ui-card-text>
          <ui-card-text>
            The Sky Tower is an observation and telecommunications tower located in Auckland, New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure in the Southern Hemisphere.
          </ui-card-text>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

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
    this.showCode('card', 5);
  }
};
</script>
