import autoInstall from '../config/auto-install';
import getType from '../helpers/typeof';

const YES = true;
const NO = false;

const template = `<div class="mdl-notify" v-if="open">
  <transition-group class="mdl-notify__list" :name="transitionName" tag="div">
    <div :class="[
    'mdl-notify__item',
    notify.className,
    notify.type + '-type',
    {
      'with-avatar': notify.avatar,
      'with-buttons': notify.buttons && notify.buttons.length
    }]"
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
  type: 'info', // 消息类型
  timeout: 5000, // 自动关闭时间，设置为0则不会关闭
  avatar: '', // 头像
  className: '', // 自定义css class
  title: '', // 标题
  content: '', // 内容
  progressColor: '', // 单独设置当前的进度条颜色
  buttons: [
    {
      // 自定义按钮 {className: String, text: String, handler: Function|String, autoClose: Boolean}
      className: '', // 自定义按钮css class
      text: 'Close', // 按钮文本
      autoClose: YES // 点击按钮是否自动关闭 默认: 关闭
    }
  ]
};

const defaultGlobalOptions = {};

const createNotifyId = () =>
  Math.floor((1 + Math.random()) * 0x10000).toString(16);

const btnHandlers = {};

const BalmUI_NotifyPlugin = {
  install(Vue, options = {}) {
    const notifyContainer = document.createElement('div');

    let config = Object.assign({}, defaultGlobalOptions, options);

    getType(config.timeout) === 'number' &&
      (itemProps.timeout = config.timeout);
    config.cancelText && (itemProps.buttons[0].text = config.cancelText);

    const transitionName =
      getType(config.transitionName) === 'string'
        ? config.transitionName
        : 'notify-list';

    const progressColor = config.progressColor || '#3f51b5';

    const data = function() {
      return {
        open: YES,
        progressColor,
        transitionName,
        notifies: []
      };
    };

    const methods = {
      setProgressColor(color) {
        this.progressColor = color;
      },
      setTransitionName(name) {
        this.transitionName = name;
      },
      resetTransitionName() {
        this.transitionName = config.transitionName;
      },
      resetProgressColor() {
        this.progressColor = config.progressColor;
      },
      add(newNotify = {}) {
        !this.open &&
          console.warn(
            `[BalmUI]:Plugin $notify has not open yet. use 'this.$notify.open = true' to open the notify plugin in Vue instance.`
          );
        if (getType(newNotify) !== 'object') {
          let content = '' + newNotify;
          newNotify = { content };
        }

        newNotify = Object.assign(
          {
            id: `${createNotifyId()}-${Date.now()}`
          },
          itemProps,
          newNotify
        );

        this.notifies.push(newNotify);
        return { id: newNotify.id };
      },
      addButtonHandler(handlerName = '', fn) {
        let type = getType(handlerName);

        let method = {
          object: () => {
            let { name, method } = handlerName;
            btnHandlers[name] = method;
          },
          string: () => {
            if (getType(fn) === 'function') {
              btnHandlers[handlerName] = fn;
            } else {
              console.error(
                `[BalmUI]:Plugin $notify added method '${handlerName}' failed. The 2nd argument should be a 'function' type, but got '${getType(
                  fn
                )}'.`
              );
            }
          },
          array: () => {
            handlerName.forEach(item => {
              btnHandlers[item.name] = item.method;
            });
          }
        }[type];

        method && method();
      },
      findNotifyIndex(notify) {
        return this.notifies.findIndex(function(item) {
          return notify.id === item.id;
        });
      },
      findNotify(notify) {
        return this.notifies.find(function(item) {
          return notify.id === item.id;
        });
      },
      close(notify) {
        let index = this.findNotifyIndex(notify);
        getType(index) === 'number' && this.notifies.splice(index, 1);
      },
      $_hasProgress({ timeout }) {
        return timeout && getType(timeout) === 'number';
      },
      $_buttonHandler({ handler, autoClose }, notify) {
        switch (typeof handler) {
          case 'string':
            btnHandlers[handler] && btnHandlers[handler](notify);
            break;
          case 'function':
            handler(notify);
            break;
        }
        autoClose !== NO && this.close(notify);
      },
      $_setBackgroundImage(src) {
        return { backgroundImage: `url(${src})` };
      },
      $_setProgressStyle({ timeout, progressColor }) {
        let duration = `${timeout}ms`;
        return {
          backgroundColor: progressColor || this.progressColor,
          animationDuration: duration,
          webkitAnimationDuration: duration
        };
      },
      $_autoClose(notify) {
        if (this.$_hasProgress(notify)) {
          this.close(notify);
        }
      }
    };

    const created = function() {
      document.body.appendChild(notifyContainer);
    };

    Vue.prototype.$notify = new Vue({
      el: notifyContainer,
      template,
      data,
      methods,
      created
    });
  }
};

autoInstall(BalmUI_NotifyPlugin);

export default BalmUI_NotifyPlugin;
