<template>
  <div class="page--list">
    <div class="component-title">
      <h3>List 列表</h3>
      <p>通用列表。</p>
    </div>

    <h4>0. 使用方式</h4>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>1. 简单列表</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__list-item">
              <!-- Simple list -->
              <ui-list class="demo-list-item">
                <ui-item v-for="(item, index) in items" :key="index">
                  <ui-item-primary>
                    {{ item }}
                  </ui-item-primary>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[1]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__icon">
              <!-- Icon List -->
              <ui-list class="demo-list-icon">
                <ui-item v-for="(item, index) in items" :key="index">
                  <ui-item-primary>
                    <ui-item-icon>person</ui-item-icon>
                    {{ item }}
                  </ui-item-primary>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[2]"></ui-markdown>
    </div>

    <h4>2. 可操作列表</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__action">
              <!-- List items with avatar and action -->
              <ui-list class="demo-list-action">
                <ui-item v-for="(item, index) in items" :key="index">
                  <ui-item-primary>
                    <ui-item-avatar>person</ui-item-avatar>
                    <span>{{ item }}</span>
                  </ui-item-primary>
                  <ui-item-action>
                    <a href="#">
                      <ui-icon>star</ui-icon>
                    </a>
                  </ui-item-action>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[3]"></ui-markdown>
    </div>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__list-control">
              <!-- List with avatar and controls -->
              <ui-list class="demo-list-control">
                <ui-item v-for="(item, index) in items2" :key="index">
                  <ui-item-primary>
                    <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
                    {{ item.name }}
                  </ui-item-primary>
                  <ui-item-action>
                    <ui-checkbox v-if="index === 0" :value="item.id" :model="item.value"></ui-checkbox>
                    <ui-radio v-if="index === 1" :value="item.id" :model="item.value"></ui-radio>
                    <ui-switch v-if="index === 2" :value="true" :model="item.value"></ui-switch>
                  </ui-item-action>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[4]"></ui-markdown>
    </div>

    <h4>3. 两行结构列表</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__two-line">
              <!-- Two Line List with secondary info and action -->
              <ui-list class="demo-list-two" two-line>
                <ui-item v-for="(item, index) in items2" :key="index">
                  <ui-item-primary>
                    <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
                    <span>{{ item.name }}</span>
                    <ui-item-subtitle>62 Episodes</ui-item-subtitle>
                  </ui-item-primary>
                  <ui-item-secondary>
                    <ui-item-info>{{ item.info }}</ui-item-info>
                    <ui-item-action>
                      <a href="#">
                        <ui-icon>star</ui-icon>
                      </a>
                    </ui-item-action>
                  </ui-item-secondary>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[5]"></ui-markdown>
    </div>

    <h4>4. 三行结构列表</h4>

    <div class="snippet-group">
      <div class="snippet-header">
        <div class="snippet-demos">
          <div class="snippet-demo-padding"></div>
          <div class="snippet-demo">
            <div class="snippet-demo-container demo-list demo-list__three-line">
              <!-- Three Line List with secondary info and action -->
              <ui-list class="demo-list-three" three-line>
                <ui-item v-for="(item, index) in items2" :key="index">
                  <ui-item-primary>
                    <ui-item-avatar>{{ item.avatar }}</ui-item-avatar>
                    <span>{{ item.name }}</span>
                    <ui-item-body>{{ item.text }}</ui-item-body>
                  </ui-item-primary>
                  <ui-item-secondary>
                    <ui-item-action>
                      <a href="#">
                        <ui-icon>star</ui-icon>
                      </a>
                    </ui-item-action>
                  </ui-item-secondary>
                </ui-item>
              </ui-list>
            </div>
          </div>
          <div class="snippet-demo-padding"></div>
        </div>
      </div>
      <ui-markdown :code="code[6]"></ui-markdown>
    </div>

    <ui-apidoc name="list"></ui-apidoc>
    <ui-apidoc name="item"></ui-apidoc>
    <ui-apidoc name="item-primary"></ui-apidoc>
    <ui-apidoc name="item-avatar"></ui-apidoc>
    <ui-apidoc name="item-icon"></ui-apidoc>
    <ui-apidoc name="item-secondary"></ui-apidoc>
    <ui-apidoc name="item-info"></ui-apidoc>
    <ui-apidoc name="item-action"></ui-apidoc>
    <ui-apidoc name="item-body"></ui-apidoc>
    <ui-apidoc name="item-subtitle"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - 列表 <ui-list>'
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
      }],
      item3: [{
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      }, {
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      }, {
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }]
    };
  },
  created() {
    this.showCode('list', 6);
  }
};
</script>
