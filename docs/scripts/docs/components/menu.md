#### 使用注意点

**`<ui-menu>`**

> 设置下拉菜单 `position` 属性前请先确保外容器样式使用 `position: relative;`

**`<ui-menuitem>`**

```html
<ui-menuitem :item="someObj">
  ...
</ui-menuitem>
```

菜单项对象默认支持字段：

```json
{
  label: "菜单名",
  disabled: false,
  divider: false
}
```

如果设置 `label` 属性为 "name"

```html
<ui-menuitem :item="someObj" label="name">
  ...
</ui-menuitem>
```

那么菜单项对象默认字段就变为：

```json
{
  name: "菜单名", // 变成自定义label值
  disabled: false,
  divider: false
}
```
