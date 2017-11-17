const YES = true;
const NO = false;

const getType = (o) => ({}).toString.call(o).replace(/\[object\s(.*)]/, '$1').toLowerCase();

const template = `<div class="mdl-notify" v-if="open">
  <transition-group class="mdl-notify__list" :name="transitionName" tag="div">
    <div :class="['mdl-notify__item', notify.className, notify.type + '-type']"
    v-for="(notify, index) in notifies"
    :key="notify.id">
      <div class="mdl-notify__container">
        <div class="avatar" v-if="notify.avatar"><span :style="$_setBackgroundImage(notify.avatar)"></span></div>
        <div class="body">
          <div class="title" v-if="notify.title">{{ notify.title }}</div>
          <div class="content">{{ notify.content }}</div>
        </div>
        <div class="mdl-notify__buttons"
             v-if="notify.buttons && notify.buttons.length">
          <div :class="['btn-item', btn.className]"
               v-for="(btn, index) in notify.buttons"
               :key="index"
               @click="$_buttonHandler(btn, notify)">{{ btn.text }}</div>
        </div>
      </div>
      <div class="progress-bar" v-if="$_hasProgress(notify)">
        <span :style="$_setProgressStyle(notify)"
              @animationend="$_autoClose(notify)"
              @webkitAnimationEnd="$_autoClose(notify)"></span>
      </div>
    </div>
  </transition-group>
</div>`;

const itemProps = {
  type: 'info',   // 消息类型
  timeout: 5000,  // 自动关闭时间，设置为0则不会关闭
  avatar: null,   // 头像
  className: '',  // 自定义css class
  color: null,    // 字体颜色
  title: '',      // 标题
  content: '',    // 内容
  progressColor: '',    // 单独设置当前的进度条颜色
  buttons: [{     // 自定义按钮 {className: String, text: String, handler: Function|String, autoClose: Boolean}
    className: '',      // 自定义按钮css class
    text: 'Close',      // 按钮文本
    handler: 'close',   // 按钮点击处理方法
    autoClose: YES       // 点击按钮是否自动关闭 默认: 关闭
  }],
};

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16);

export default {
  install (Vue) {

    const notifyContainer = document.createElement('div');

    Vue.prototype.$notify = new Vue({
      el: notifyContainer,
      template,
      data () {
        return {
          open: YES,
          progressColor: '#3f51b5',
          transitionName: 'notify-list',
          notifies: [],
          btnHandlers: {}
        }
      },
      methods: {
        setProgressColor (color) {
          this.progressColor = color;
        },
        setTransitionName (name) {
          this.transitionName = name;
        },
        resetTransitionName () {
          this.transitionName = 'notify-list';
        },
        resetProgressColor () {
          this.progressColor = '#3f51b5';
        },
        add (newNotify = {}) {
          !this.open && console.warn(`[BalmUI]:Plugin $notify has not open yet. use 'this.$notify.open = true' to open the notify plugin in Vue instance.` );

          newNotify = Object.assign({
            id: `${s4()}-${Date.now()}`
          }, itemProps, newNotify);

          this.notifies.push(newNotify);
        },
        addButtonHandler (handlerName = '', fn) {
          let type = getType(handlerName);

          let method = ({
            object: () => {
              let {name, method} = handlerName;
              this.btnHandlers[name] = method;
            },
            string: () => {
              if(getType(fn) === 'function') {
                this.btnHandlers[handlerName] = fn;
              } else {
                console.error(`[BalmUI]:Plugin $notify added method '${handlerName}' failed. The 2nd argument of method 'addButtonHandler' should be a 'function' type, but received is '${getType(fn)}'.`);
              }
            },
            array: () => {
              handlerName.forEach( (item) => {
                this.btnHandlers[item.name] = item.method;
              });
            }
          })[type];

          method && method();
        },
        findNotifyIndex (notify) {
          return this.notifies.findIndex(function (item) {
            return notify.id === item.id;
          });
        },
        close (notify) {
          let index = this.findNotifyIndex(notify);
          (getType(index)  === 'number') && this.notifies.splice(index, 1);
        },
        $_hasProgress ({timeout}) {
          return timeout && (getType(timeout) === 'number');
        },
        $_buttonHandler ({handler, autoClose}, notify) {
          switch (typeof handler) {
            case 'string':
              this.btnHandlers[handler] && this.btnHandlers[handler](notify);
              break;
            case 'function':
              handler(notify);
              break;
          }
          (autoClose !== NO) && this.close(notify);
        },
        $_setBackgroundImage (src) {
          return {backgroundImage: `url(${src})`};
        },
        $_setProgressStyle ({timeout, progressColor}) {
          let duration = `${timeout}ms`;
          return {
            backgroundColor: progressColor || this.progressColor,
            animationDuration: duration,
            webkitAnimationDuration: duration,
          }
        },
        $_autoClose (notify) {
          if(this.$_hasProgress(notify)){
            this.close(notify);
          }
        },
      },
      created() {
        document.body.appendChild(notifyContainer);
      }
    });


  }
}
