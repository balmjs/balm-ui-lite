<template>
  <div class="page--notify">
    <div class="component-title">
      <h2>Notify</h2>
    </div>

    <h4 class="line">概述</h4>
    <p>有时候，我们想显示一些提示文本，如果使用dialog组件则需要先引入进components，并且需要在data中为组件设置开关属性，最后再去template中使用它，这似乎过于繁琐。</p>
    <p><strong>Notify</strong>是一个特殊的<strong>插件</strong>，它本身是一个Vue实例，你可以用它代替dialog组件处理简单的业务。</p>
    <p>你可以在任何时候调用它而无需再为界面结构考虑。</p>
    <p>使你的template更加"干净"。</p>
    <p>注意：如果你需要处理复杂的业务，例如：处理一些表单数据，收集结果并提交，请使用dialog组件</p>

    <h4 class="line">引入</h4>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>示例代码中的可配置项包含以下属性：</p>
    <ui-apidoc name="plugin-notify-usage" :show-title="false"></ui-apidoc>

    <h4 class="line">示例</h4>
    <h5>基本用法</h5>
    <p>全局调用，用于Vue实例外部</p>
    <ui-markdown :text="code[1]"></ui-markdown>
    <p>实例内部调用</p>
    <ui-markdown :text="code[2]"></ui-markdown>
    <p>
      <ui-button colored
                 raised
                 @click="$notify.add(options1)">Hello BalmUI</ui-button>
    </p>
    <p>点击上面的按钮，会在浏览器右上角出现一个Notify。默认包含一段文字，一个进度条，和一个Close按钮。</p>
    <p>如果你把鼠标移动到上面的话，进度条则会暂停，鼠标移出时进度条会继续。当进度条达到100%时，当前这条Notify就会自动关闭。</p>
    <p>你也可以点击 <strong>Close</strong> 按钮提前关闭Notify。</p>

    <h5>更改布局</h5>
    <p><ui-button colored raised @click="$notify.add(options2)">带有头像和多个按钮的</ui-button></p>
    <ui-accordion>
      <ui-markdown :code="code[3]"></ui-markdown>
    </ui-accordion>

    <h5>更改进度条</h5>
    <p>
      <ui-button colored raised @click="$notify.add(options3)">移除进度条的（不会再自动关闭）</ui-button>
      <ui-button raised @click="$notify.add(options4)">改变了进度条颜色的</ui-button>
    </p>
    <ui-accordion>
      <ui-markdown :code="code[4]"></ui-markdown>
    </ui-accordion>

    <p><strong>使用$notify.add方法，通过传入不同的参数，可以随意定义每个Notify的样式。</strong></p>

    <h4 class="line">方法</h4>

    <h5>$notify.add(options)</h5>
    <p>add是Notify的主要方法，通过将配置属性传入add方法，我们可以改变消息通知框的结构和表现形式。<strong>options</strong>参数的具体属性如下：</p>
    <ui-apidoc name="plugin-notify-add" :show-title="false"></ui-apidoc>
    <p>上面的buttons属性是一个数组，数组的每项是一个对象（Object），每个对象的相关属性为：</p>
    <ui-apidoc name="plugin-notify-buttons" :show-title="false"></ui-apidoc>
    <p>这个方法会返回一个对象：{id: NotifyId}，这个id可以用于Notify的查找方法。</p>

    <div class="divider"></div>

    <h5>$notify.addButtonHandler(handlerName | Object | Array, handler)</h5>
    <p>addButtonHandler是一个灵活的方法，它允许你事先将各种函数预设进Notify的btnHandlers集合中，从而使得在添加按钮handler的时候可以使用字符串来映射对应的处理方法。</p>
    <p>提示：当按钮被点击触发处理函数时，不会改变当前函数执行的作用域，同时会把当前的notify对象作为参数传入该函数中。</p>
    <p>通过这个方法，可以把上面多个按钮的例子改写为：</p>
    <p><ui-button colored raised @click="$notify.add(options5)">使用字符串映射预设的处理方法</ui-button></p>
    <ui-accordion expanded>
      <ui-markdown :code="code[5]"></ui-markdown>
    </ui-accordion>
    <p>提示：你可以比较这个例子和上面调用相同方法的例子之间的区别。</p>
    <p>扩展：通过这个方法，我们可以全局预设好Notify需要处理的事件，而调用的时候只需要把自定义按钮的handler属性设置为对应字符串。</p>
    <p>这个方法的传参有三种形式：</p>
    <ui-accordion expanded>
      <ui-markdown :code="code[6]"></ui-markdown>
    </ui-accordion>

    <div class="divider"></div>

    <h5>$notify.close(notify: Object)</h5>
    <p>这个方法用于手动关闭指定Notify。通常用于按钮设置为点击不自动关闭，然后自行处理的逻辑。</p>
    <p><ui-button colored raised @click="$notify.add(options6)">输入like关闭</ui-button></p>
    <ui-accordion>
      <ui-markdown :code="code[7]"></ui-markdown>
    </ui-accordion>
    <p>notify参数是一个对象，只需要包含指定notify的id即可：{id: targetNotifyId}；这个对象一般会作为参数传入按钮的处理方法中，另外Notify的add方法也会返回这个对象。</p>

    <div class="divider"></div>

    <h5>$notify.findNotifyIndex(notify: Object)</h5>
    <p>这个方法用于返回指定Notify的索引。可能会在某些场景下有用。</p>

    <div class="divider"></div>

    <h5>$notify.findNotify(notify: Object)</h5>
    <p>这个方法用于返回指定的Notify。可能会在某些场景下有用。</p>

    <div class="divider"></div>

    <h5>$notify.resetProgressColor()</h5>
    <p>将所有的Notify进度条颜色还原为预设值。</p>

    <div class="divider"></div>

    <h5>$notify.resetTransitionName()</h5>
    <p>将所有的Notify的过渡动画名称还原为预设值。</p>

    <div class="divider"></div>

    <h5>$notify.setProgressColor(color: String)</h5>
    <p>设置所有进度条颜色。优先级低于每个Notify自定义的进度条颜色。</p>

    <h5>$notify.setTransitionName(name: String)</h5>
    <p>设置所有Notify的过渡动画名称以更改过渡动画。</p>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

const options1 = { content: 'Hello BalmUI!' };
const options2 = {
  avatar: require('../../../images/assets/demos/image_card.jpg'),
  content: `Hey! It's you!`,
  buttons: [
    {
      text: 'Close'
    },
    {
      text: 'Hello',
      handler: 'sayHello'
    }
  ]
};
const options3 = Object.assign({}, options1, { timeout: 0 });
const options4 = Object.assign({}, options1, { progressColor: '#ff4081' });
const options5 = Object.assign({}, options2, options4);
const options6 = Object.assign({}, options3, {
  content: 'Do you like BalmUI?',
  buttons: [
    {
      text: 'like',
      handler: 'like',
      autoClose: false
    }
  ]
});

export default {
  mixins: [snippets],
  metaInfo: {
    titleTemplate: '%s - Notify'
  },
  data() {
    return {
      options1,
      options2,
      options3,
      options4,
      options5,
      options6
    };
  },
  methods: {
    sayHello() {
      alert(`Yes, it's me.\nHello!`);
    },
    like(notify) {
      let result = prompt('say like!');
      if (result.toLowerCase() === 'like') {
        this.$notify.close(notify);
      }
    }
  },
  created() {
    this.showCode('notify', 7);
    this.$notify.addButtonHandler('sayHello', this.sayHello);
    this.$notify.addButtonHandler('like', this.like);
  }
};
</script>

<style scoped>
h2.line {
  border-bottom: 1px solid #ddd;
}

.divider {
  height: 0;
  width: 100%;
  margin-bottom: 4em;
}
</style>
