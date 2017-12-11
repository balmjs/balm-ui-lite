<template>
  <div class="page--notify">

    <h1>Notify</h1>

    <h2 class="line">概述</h2>
    <p>有时候，我们想显示一些提示文本，如果使用dialog组件则需要先引入进components，并且需要在data中为组件设置开关属性，最后再去template中使用它，这似乎过于繁琐。</p>
    <p><strong>Notify</strong>是一个特殊的<strong>插件</strong>，它本身是一个Vue实例，你可以用它代替dialog组件处理简单的业务。</p>
    <p>你可以在任何时候调用它而无需再为界面结构考虑。</p>
    <p>使你的template更加"干净"。</p>
    <h4>注意：如果你需要处理复杂的业务，例如：处理一些表单数据，收集结果并提交，请使用dialog组件</h4>

    <h2 class="line">引入</h2>
    <ui-markdown :text="code[0]"></ui-markdown>
    <p>接下来就可以在任意位置调用Notify插件了。</p>

    <h2 class="line">调用方法</h2>
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

    <h2 class="line">属性</h2>
    <p>Notify本身是一个Vue实例，它包含以下属性：(默认值)</p>
    <ul>
      <li>
        <span>open: true // 关闭和隐藏Notify的开关</span>
      </li>
      <li>
        <span>progressColor: '#3f51b5' // 全局的进度条颜色（每条Notify还可以单独设置）</span>
      </li>
      <li>
        <span>transitionName: 'notify-list' // Notify入场动画，设置为空字符串则移除动画效果</span>
      </li>
      <li>
        <span>notifies: [] // Notify队列</span>
      </li>
      <li>
        <span>btnHandlers: {} // 按钮被点击时可以用字符串来映射的处理方法集合</span>
      </li>
    </ul>

    <h2 class="line">方法</h2>

    <h3>$notify.add(options)</h3>
    <p>add是Notify的主要方法，通过将配置属性传入add方法，我们可以改变消息通知框的结构和表现形式。</p>
    <ui-markdown :text="code[3]"></ui-markdown>
    <h4>下面是一个示例</h4>
    <p><ui-button colored raised @click="$notify.add(options2)">带有头像和多个按钮的</ui-button></p>
    <ui-markdown :text="code[4]"></ui-markdown>
    <h4>另一些示例</h4>
    <p>
      <ui-button colored raised @click="$notify.add(options3)">移除进度条的（不会再自动关闭）</ui-button>
      <ui-button raised @click="$notify.add(options4)">改变了进度条颜色的</ui-button>
    </p>

    <div class="divider"></div>

    <h3>$notify.addButtonHandler(handlerName | Object | Array, funcName)</h3>
    <p>addButtonHandler是一个灵活的方法，它允许你事先将各种函数预设进Notify的btnHandlers集合中，从而使得在添加按钮handler的时候可以使用字符串来映射对应的处理方法。</p>
    <h4>提示：当按钮被点击触发处理函数时，不会改变当前函数执行的作用域，同时会把当前的notify对象作为参数传入该函数中。</h4>
    <p><ui-button colored raised @click="$notify.add(options5)">使用字符串映射预设的处理方法</ui-button></p>
    <ui-markdown :text="code[5]"></ui-markdown>
    <h4>提示：你可以比较这个例子和上面调用相同方法的例子之间的区别。</h4>
    <h4>扩展：通过这个方法，我们可以全局预设好Notify需要处理的事件，而调用的时候只需要把自定义按钮的handler属性设置为对应字符串。</h4>
    <p>这个方法的传参有三种形式：</p>
    <ui-markdown :text="code[6]"></ui-markdown>

    <div class="divider"></div>

    <h3>$notify.close(notify)</h3>
    <p>这个方法用于手动关闭指定Notify。通常用于按钮设置为点击不自动关闭，然后自行处理的逻辑。</p>
    <p><ui-button colored raised @click="$notify.add(options6)">输入like关闭</ui-button></p>
    <ui-markdown :text="code[7]"></ui-markdown>

    <div class="divider"></div>

    <h3>$notify.findNotifyIndex(notify)</h3>
    <p>这个方法用于返回指定Notify的索引。可能会在某些场景下有用。</p>

    <div class="divider"></div>

    <h3>$notify.resetProgressColor()</h3>
    <p>将所有的Notify进度条颜色还原为默认值: '#3f51b5'。</p>

    <div class="divider"></div>

    <h3>$notify.resetTransitionName()</h3>
    <p>将所有的Notify的过渡动画名称还原为默认值: 'notify-list'。</p>

    <div class="divider"></div>

    <h3>$notify.setProgressColor()</h3>
    <p>设置所有进度条颜色。优先级低于每个Notify自定义的进度条颜色。</p>

    <h3>$notify.setTransitionName()</h3>
    <p>设置所有Notify的过渡动画名称以更改过渡动画。</p>

    <div class="divider"></div>
  </div>
</template>

<script>
  import snippets from '../../mixins/snippets';

  const options1 = {content: 'Hello BalmUI!'};
  const options2 = {
    avatar: require('../../../images/assets/demos/image_card.jpg'),
    content: `Hey! It's you!`,
    buttons: [{
      text: 'Close'
    }, {
      text: 'Hello',
      handler: 'sayHello'
    }]
  };
  const options3 = Object.assign({}, options1, {timeout: 0});
  const options4 = Object.assign({}, options1, {progressColor: '#ff4081'});
  const options5 = Object.assign({}, options2, options4);
  const options6 = Object.assign({}, options3, {
    content: 'Do you like BalmUI?',
    buttons: [{
      text: 'like',
      handler: 'like',
      autoClose: false
    }]
  });

  export default {
    mixins: [snippets],
    metaInfo: {
      titleTemplate: '%s - Notify'
    },
    data () {
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
      sayHello () {
        alert(`Yes, it's me.\nHello!`);
      },
      like (notify) {
        let result = prompt('say like!');
        if(result.toLowerCase() === 'like') {
          this.$notify.close(notify);
        }
      }
    },
    created() {
      this.showCode('notify', 7);
      this.$notify.addButtonHandler('sayHello', this.sayHello);
      this.$notify.addButtonHandler('like', this.like);
    }
  }
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
