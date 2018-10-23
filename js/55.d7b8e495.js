(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{275:function(n,r,o){"use strict";var e=o(18),t=o.n(e),i=o(19),a=o.n(i),d=o(22),u=o.n(d),s=o(20),l=o.n(s),c=o(21),f=o.n(c),m=o(0),g=o.n(m),p=o(276),h=o.n(p),w=o(277),v=o.n(w),y=(o(278),function(n){function r(){return a()(this,r),l()(this,(r.__proto__||t()(r)).apply(this,arguments))}return f()(r,n),u()(r,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),r=n.document,o=n.className;if("string"==typeof r){var e=new h.a.Renderer;e.table=function(n,r){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+r+"</tbody></table></div>"},e.code=function(n,r){return'<pre><code class="hljs '+r+'">'+(!(!r||!v.a.getLanguage(r))?v.a.highlight(r,n).value:n)+"</code></pre>"},h.a.setOptions({renderer:e});var t=h()(r,{renderer:e});return g.a.createElement("div",{className:o,dangerouslySetInnerHTML:{__html:t}})}return g.a.createElement("span",null)}}]),r}(m.Component));r.a=y},327:function(n,r){n.exports="## 图标 Icon\n\n\n\n### 基本用法\n```jsx\nimport { Icon } from 'zarm';\n\nconst ICONS = [\n  'right', 'right-round', 'right-round-fill',\n  'wrong', 'wrong-round', 'wrong-round-fill',\n  'info-round', 'info-round-fill',\n  'question-round', 'question-round-fill',\n  'warning-round', 'warning-round-fill',\n  'arrow-left', 'arrow-right', 'arrow-top', 'arrow-bottom',\n  'add', 'add-round', 'add-round-fill',\n  'minus', 'minus-round', 'minus-round-fill',\n  'broadcast', 'search',\n];\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className=\"grid\">\n        {\n          ICONS.sort().map((icon, i) => {\n            return (\n              <div className=\"grid-column\" key={+i}>\n                <Icon className=\"icon\" theme=\"primary\" type={icon} />\n                <span className=\"icon-name\">{icon}</span>\n              </div>\n            );\n          })\n        }\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | 'default' | 主题，可选值 `default`、`primary`、`info`、`success`、`warning`、`error` |\n| type | string | - | 图标类型，可选值 `right`、`right-round`、`right-round-fill`,`wrong`、`wrong-round`、`wrong-round-fill`、`info-round`、`info-round-fill`、`question-round`、`question-round-fill`、`warning-round`、`warning-round-fill`、`arrow-left`、`arrow-right`、`arrow-top`、`arrow-bottom`、`add`、`add-round`、`add-round-fill`、`minus`、`minus-round`、`minus-round-fill`、`broadcast` |\n"},669:function(n,r,o){"use strict";o.r(r);var e=o(18),t=o.n(e),i=o(19),a=o.n(i),d=o(20),u=o.n(d),s=o(21),l=o.n(s),c=function(n){function r(){var n,e,i,d;a()(this,r);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return e=i=u()(this,(n=r.__proto__||t()(r)).call.apply(n,[this].concat(l))),i.document=function(){return{document:o(327),className:"icon-page"}},d=e,u()(i,d)}return l()(r,n),r}(o(275).a);r.default=c}}]);