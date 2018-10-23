(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{261:function(n,e,o){"use strict";o.r(e);var r=o(18),t=o.n(r),a=o(19),c=o.n(a),i=o(20),s=o.n(i),l=o(21),u=o.n(l),d=o(279),m=(o(391),function(n){function e(){var n,r,a,i;c()(this,e);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return r=a=s()(this,(n=e.__proto__||t()(e)).call.apply(n,[this].concat(u))),a.document=function(){return{document:o(333),className:"notice-bar-page"}},i=r,s()(a,i)}return u()(e,n),e}(d.a));e.default=m},333:function(n,e){n.exports="## 通告栏 NoticeBar\n\n\n\n### 基本用法\n```jsx\nimport { NoticeBar, Icon } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar>普通</NoticeBar>\n        <NoticeBar theme=\"error\">错误色</NoticeBar>\n        <NoticeBar icon={<Icon type=\"wrong-round\" />}>自定义图标</NoticeBar>\n        <NoticeBar autoscroll>各位zarmer请注意，本组件使用了自动滚动功能，更多用法请参见使用文档。</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 特定场景\n```jsx\nimport { NoticeBar  } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <NoticeBar hasArrow onClick={() => alert('click this notice!')}>链接样式的</NoticeBar>\n        <NoticeBar hasClosable>可关闭的</NoticeBar>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'warning' | 主题，可选值 `default`、`primary`、`info`、`success`、`warning`、`error` |\n| icon | ReactNode | - | 设置图标 |\n| autoscroll | boolean | false | 是否开启自动滚动轮播 |\n| hasClosable | boolean | false | 是否显示关闭按钮 |\n| hasArrow | boolean | false | 是否显示箭头 |\n| onClick | () => void | - | 点击后触发的回调函数 |\n"},391:function(n,e,o){}}]);