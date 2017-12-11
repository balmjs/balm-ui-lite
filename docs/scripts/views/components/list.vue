<template>
  <div class="page--list">
    <div class="component-title">
      <h3>List</h3>
      <p>Customizable scrollable lists.</p>
    </div>

    <h4>Simple list</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__list-item">
              <!-- Simple list -->
              <ui-list class="demo-list-item">
                <ui-item v-for="(item, index) in items" :key="index">
                  {{ item }}
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[0]"></ui-markdown>
    </div>

    <h4>Icons</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__icon">
              <!-- Icon List -->
              <ui-list class="demo-list-icon">
                <ui-item v-for="(item, index) in items" :key="index">
                  <ui-item-icon>person</ui-item-icon>
                  {{ item }}
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[1]"></ui-markdown>
    </div>

    <h4>Avatars and actions</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__action">
              <!-- List items with avatar and action -->
              <ui-list class="demo-list-action">
                <ui-item v-for="(item, index) in items" :key="index">
                  <ui-item-avatar>person</ui-item-avatar>
                  {{ item }}
                  <template slot="action">
                    <ui-item-action>
                      <a href="#">
                        <ui-icon>star</ui-icon>
                      </a>
                    </ui-item-action>
                  </template>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[2]"></ui-markdown>
    </div>

    <h4>Avatars and controls</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__list-control">
              <!-- List with avatar and controls -->
              <ui-list class="demo-list-control">
                <ui-item v-for="(item, index) in items2" :key="index">
                  <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
                  {{ item.name }}
                  <template slot="action">
                    <ui-item-action>
                      <ui-checkbox v-if="index === 0" :value="item.id" :model="item.value" effect></ui-checkbox>
                      <ui-radio v-if="index === 1" :value="item.id" :model="item.value" effect></ui-radio>
                      <ui-switch v-if="index === 2" :value="true" :model="item.value" effect></ui-switch>
                    </ui-item-action>
                  </template>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[3]"></ui-markdown>
    </div>

    <h4>Two line</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__two-line">
              <!-- Two Line List with secondary info and action -->
              <ui-list class="demo-list-two" twoLine>
                <ui-item v-for="(item, index) in items2" :key="index">
                  <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
                  <span>{{ item.name }}</span>
                  <ui-item-subtitle>62 Episodes</ui-item-subtitle>
                  <template slot="action">
                    <ui-item-info>{{ item.info }}</ui-item-info>
                    <ui-item-action>
                      <a href="#">
                        <ui-icon>star</ui-icon>
                      </a>
                    </ui-item-action>
                  </template>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[4]"></ui-markdown>
    </div>

    <h4>Three line</h4>
    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__three-line">
              <!-- Three Line List with secondary info and action -->
              <ui-list class="demo-list-three" threeLine>
                <ui-item v-for="(item, index) in items2" :key="index">
                  <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
                  <span>{{ item.name }}</span>
                  <ui-item-body>{{ item.text }}</ui-item-body>
                  <template slot="action">
                    <ui-item-action>
                      <a href="#">
                        <ui-icon>star</ui-icon>
                      </a>
                    </ui-item-action>
                  </template>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :text="code[5]"></ui-markdown>
    </div>

    <ui-apidoc name="list"></ui-apidoc>
    <ui-apidoc name="item"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - List'
  },
  data() {
    return {
      items: [
        'Bryan Cranston',
        'Aaron Paul',
        'Bob Odenkirk'
      ],
      items2: [{
        id: 1,
        avatar: 'person',
        name: 'Bryan Cranston',
        text: 'Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.',
        info: 'Actor',
        value: true
      }, {
        id: 2,
        avatar: 'person',
        name: 'Aaron Paul',
        text: 'Aaron Paul played the role of Jesse in Breaking Bad. He also featured in the "Need For Speed" Movie.',
        value: 0
      }, {
        id: 3,
        avatar: 'person',
        name: 'Bob Odenkirk',
        text: 'Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the character, Bob stars in his own show now, called "Better Call Saul".',
        value: true
      }]
    };
  },
  created() {
    this.showCode('list', 6);
  }
};
</script>
