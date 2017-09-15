## Kill IE

__/path/to/app/scripts/config/kill-ie.js__

```js
import { helpers } from 'balm-ui-lite';

const IE = helpers.detectIE();

export const isIE = IE && IE < 10;

export const killIE = () => {
  const template =
    `<div class="kill-ie">
      <div class="container">
        <div class="content">
          <h1>您的浏览器版本过低，请点击<a href="http://browsehappy.com/">链接</a>升级您的浏览器</h1>
          <p>
            PS：推荐使用<a href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/">谷歌浏览器</a>；如果是双核浏览器，请切换至<b>急速模式</b>
          </p>
        </div>
      </div>
    </div>`;
  document.getElementsByTagName('html')[0].style.height = '100%';
  const body = document.getElementsByTagName('body')[0];
  body.style.height = '100%';
  body.innerHTML = template;
};
```

__/path/to/app/styles/global/kill-ie.scss__

```css
.kill-ie {
  display: table;
  width: 100%;
  height: 80%;
  a {
    text-decoration: none;
    color: red;
  }
  b {
    border-bottom: 1px solid;
  }
  .container {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  .content {
    display: inline-block;
    text-align: center;
  }
}
```

__/path/to/main.js__

```js
import { isIE, killIE } from './config/kill-ie';

if (isIE) {
  killIE();
} else {
  // your code
}
```
