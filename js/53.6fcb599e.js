(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{275:function(n,e,t){"use strict";var a=t(18),i=t.n(a),l=t(19),s=t.n(l),o=t(22),r=t.n(o),c=t(20),u=t.n(c),d=t(21),m=t.n(d),v=t(0),h=t.n(v),g=t(276),D=t.n(g),p=t(277),f=t.n(p),b=(t(278),function(n){function e(){return s()(this,e),u()(this,(e.__proto__||i()(e)).apply(this,arguments))}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var a=new D.a.Renderer;a.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table></div>"},a.code=function(n,e){return'<pre><code class="hljs '+e+'">'+(!(!e||!f.a.getLanguage(e))?f.a.highlight(e,n).value:n)+"</code></pre>"},D.a.setOptions({renderer:a});var i=D()(e,{renderer:a});return h.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:i}})}return h.a.createElement("span",null)}}]),e}(v.Component));e.a=b},325:function(n,e){n.exports="## 日期选择器 DatePicker\n\n\n\n### 基本用法\n```jsx\nimport { Cell, Button, DatePicker, Toast } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      date: {\n        visible: false,\n        value: '',\n      },\n      time: {\n        visible: false,\n        value: '',\n      },\n      limitDate: {\n        visible: false,\n        value: '2017-09-13',\n      },\n    };\n  }\n\n  toggle(key) {\n    const state = this.state[key];\n    state.visible = !state.visible;\n    this.setState({ [`${key}`]: state });\n  }\n\n  render() {\n    const {\n      date,\n      time,\n      limitDate,\n    } = this.state;\n\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('date')}>选择</Button>\n          }\n        >\n          选择日期\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('time')}>选择</Button>\n          }\n        >\n          选择时间\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('limitDate')}>选择</Button>\n          }\n        >\n          选择日期(自定义)\n        </Cell>\n\n        <DatePicker\n          visible={date.visible}\n          title=\"选择日期\"\n          placeholder=\"请选择日期\"\n          mode=\"date\"\n          value={date.value}\n          onOk={(value) => {\n            this.setState({\n              date: {\n                visible: false,\n                value,\n              },\n            });\n            Toast.show(JSON.stringify(value));\n          }}\n          onCancel={() => this.toggle('date')}\n        />\n\n        <DatePicker\n          visible={time.visible}\n          title=\"选择日期\"\n          placeholder=\"请选择日期\"\n          mode=\"time\"\n          value={time.value}\n          onOk={(value) => {\n            this.setState({\n              time: {\n                visible: false,\n                value,\n              },\n            });\n            Toast.show(JSON.stringify(value));\n          }}\n          onCancel={() => this.toggle('time')}\n        />\n\n        <DatePicker\n          visible={limitDate.visible}\n          title=\"选择日期\"\n          placeholder=\"请选择日期\"\n          mode=\"date\"\n          min=\"2007-01-03\"\n          max=\"2019-11-23\"\n          value={limitDate.value}\n          onOk={(value) => {\n            this.setState({\n              limitDate: {\n                visible: false,\n                value,\n              },\n            });\n            Toast.show(JSON.stringify(value));\n          }}\n          onCancel={() => this.toggle('limitDate')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n### 表单选择 DateSelect\n```jsx\nimport { Cell, DateSelect } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n      value: '',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell title=\"日期选择\">\n          <DateSelect\n            title=\"选择日期\"\n            placeholder=\"请选择日期\"\n            mode=\"date\"\n            value={this.state.value}\n            onOk={(value) => {\n              console.log('DateSelect onOk: ', value);\n              this.setState({\n                visible: false,\n                value,\n              });\n            }}\n          />\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### 平铺选择 DatePickerView\n```jsx\nimport { DatePickerView } from 'zarm';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <DatePickerView\n          mode=\"datetime\"\n          min=\"2018-1-13\"\n          onChange={(value) => {\n            console.log('datePickerView => ', value);\n          }}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n### API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | string &#124; Date | - | 值 |\n| defaultValue | string &#124; Date | - | 初始值 |\n| valueMember | string | 'value' | 值字段对应的key |\n| mode | string | 'date' | 指定日期选择模式，可选项 `year`, `month`, `date`, `time`, `datetime` |\n| min | string | - | 相应mode的最小时间 |\n| max | string | - | 相应mode的最大时间 |\n| minuteStep | number | 1 | 分钟间隔 |\n| wheelDefaultValue | string | - | 滚轮默认值 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: object) => void | - | 值变化时触发的回调函数 |\n\n#### 仅 DatePicker & DateSelect 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否展示 |\n| title | string | '请选择' | 选择器标题 |\n| cancelText | string | '取消' | 取消栏文字 |\n| okText | string | '确定' | 确定栏文字 |\n| onOk | (value?: object) => void | - | 点击确定时触发的回调函数 | \n| onCancel | () => void | - | 点击取消时触发的回调函数 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n\n#### 仅 DateSelect 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| placeholder | string | '请选择' | 输入提示信息 |\n| format | string | - | 格式化显示值。例：format=\"YYYY年MM月DD日\"<br /> 年:`YYYY`, 月:`MM`, 日:`DD`, 时:`hh`, 分:`mm`。 |\n"},667:function(n,e,t){"use strict";t.r(e);var a=t(18),i=t.n(a),l=t(19),s=t.n(l),o=t(20),r=t.n(o),c=t(21),u=t.n(c),d=function(n){function e(){var n,a,l,o;s()(this,e);for(var c=arguments.length,u=Array(c),d=0;d<c;d++)u[d]=arguments[d];return a=l=r()(this,(n=e.__proto__||i()(e)).call.apply(n,[this].concat(u))),l.document=function(){return{document:t(325),className:"datepicker-page"}},o=a,r()(l,o)}return u()(e,n),e}(t(275).a);e.default=d}}]);