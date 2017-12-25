## 抵制IE方案
> 直接 `Copy` +`Paste` 套路即可

```js
// 文件：/path/to/app/scripts/kill-ie.js
import { helpers } from 'balm-ui-lite';

const IE = helpers.detectIE();

const isIE = IE && IE < 10; // 项目兼容到IE10+

const killIE = () => {
  let body = document.getElementsByTagName('body')[0];
  let template =
    `<div class="kill-ie">
      <div class="container">
        <div class="content">
          <h1>您的浏览器版本过低，请点击<a href="https://browsehappy.com/">链接</a>升级您的浏览器</h1>
          <p>
            PS：推荐使用<a href="https://www.google.cn/intl/zh-CN/chrome/">谷歌浏览器</a>；如果是双核浏览器，请切换至<b>急速模式</b>
          </p>
        </div>
      </div>
    </div>`;

  document.getElementsByTagName('html')[0].style.height = '100%';
  body.style.height = '100%';

  body.innerHTML = template;
};

export {
  isIE,
  killIE
};
```

```js
// 文件：/path/to/app/scripts/main.js
import { isIE, killIE } from './kill-ie';

if (isIE) {
  killIE();
} else {
  // your code
}
```

```css
/* 文件：/path/to/app/styles/global/kill-ie.scss */
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
