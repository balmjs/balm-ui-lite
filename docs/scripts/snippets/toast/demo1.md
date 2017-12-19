```html
<ui-button raised colored @click="$toast('短暂提示')">打开toast</ui-button>
<ui-button raised colored @click="$toast({timeout: 5000, message: '时间较长的短暂提示'})">打开另一个toast</ui-button>
<ui-button raised colored @click="$toast({
  timeout: 3000, 
  className: 'my-custom-toast', 
  message: '更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示更多改变的短暂提示
  '})">打开第三个toast</ui-button>
```
