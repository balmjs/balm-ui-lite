// TODO 未完全测试，未自动安装

/**
 * @method 检测元素是否在viewport内
 * @param  el {Element}
 * @return result {Boolean}
 * */
const isInViewport = function(el) {
  let rect = el.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * @method 为元素设置src或者backgroundImage
 * @description 根据节点是否是img来判断
 * @param node {Element}
 * @param src {String}
 * */
const setSrc = function(node, src) {
  let nodeName = node.nodeName.toLowerCase();
  if (nodeName === 'img') {
    node.src = src;
  } else {
    node.style.backgroundImage = `url(${src})`;
  }
  node.setAttribute('data-loaded', 1);
};

/**
 * @method 获取元素的[data-src]准备渲染图片
 * @param el {Element}
 * */
const loadImage = function(el) {
  let img = new Image(),
    src = el.getAttribute('data-src');
  img.src = src;
  if (img.complete) {
    setSrc(el, src);
  } else {
    img.onload = function() {
      setSrc(el, src);
    };
  }
};

/**
 * @method 批量懒加载
 * @param imgs {Array}
 * */
const lazyLoad = function(imgs) {
  imgs.forEach(img => {
    isInViewport(img) && loadImage(img);
  });
};

/**
 * @method 获取 && 筛选需要懒加载的对象
 * @param el {Element}
 * */
const getImgs = el =>
  [].slice.call(el.querySelectorAll('[data-src]')).filter(function(node) {
    return !node.getAttribute('data-loaded');
  });

/**
 * @module 懒加载指令
 * @description pc端适用于大于ie10或其他浏览器，移动端仅适用于安卓
 * */
export default {
  bind(el) {
    let timer = null;

    el.addEventListener(
      'scroll',
      function() {
        timer && clearTimeout(timer);

        timer = setTimeout(function() {
          lazyLoad(getImgs(el));
        }, 200);
      },
      false
    );

    if (window.MutationObserver) {
      let observer = new MutationObserver(function() {
        lazyLoad(getImgs(el));
      });

      observer.observe(el, {
        characterData: true,
        childList: true,
        subtree: true
      });
    }
  },
  inserted(el) {
    lazyLoad(getImgs(el));
  }
};
