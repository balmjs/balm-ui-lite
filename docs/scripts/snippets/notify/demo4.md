```js
// default options

const options = {
  type: 'info',   // 消息类型 用于定义预设样式
  timeout: 5000,  // 自动关闭时间，设置为0则不会关闭
  hoverStop: true, // 鼠标移入停止自动关闭计时
  avatar: null,   // 头像
  className: '',  // 自定义css class
  color: null,    // 字体颜色
  title: '',      // 标题
  content: '',    // 内容
  progressColor: '',    // 单独设置当前的进度条颜色
  
  // 自定义按钮 {className: String, text: String, handler: Function|String, autoClose: Boolean}
  buttons: [{     
    className: '',      // 自定义按钮css class
    text: 'Close',      // 按钮文本
    handler: 'close',   // 按钮点击处理方法
    autoClose: true       // 点击按钮是否自动关闭 默认: 关闭
  }],
};

this.$notify.add(options);

```
