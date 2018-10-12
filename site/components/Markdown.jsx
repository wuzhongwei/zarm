import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-gist.css';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.components = new Map();
  }

  componentDidMount() {
    this.renderDOM();
  }

  componentDidUpdate() {
    this.renderDOM();
  }

  componentWillUnmount() {
    this.nodeList.forEach((node) => {
      ReactDOM.unmountComponentAtNode(node);
    });
  }

  nodeList = [];

  renderDOM() {
    // eslint-disable-next-line
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);
      this.nodeList.push(div);
      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
  }

  render() {
    const { document, className } = this.document(localStorage.getItem('LANGUAGE') || 'zh-CN');

    if (typeof document === 'string') {
      this.components.clear();

      const renderer = new marked.Renderer();
      renderer.table = (header, body) => {
        return `<div class="grid-container"><table class="grid"><thead>${header}</thead><tbody>${body}</tbody></table></div>`;
      };

      const html = marked(document, {
        renderer,
        highlight: (code) => {
          return hljs.highlightAuto(code).value;
        },
      });

      // const html = marked(
      //   document
      //     .replace(/:::\s?api\s?([^]+?):::/g, (match, p1) => {
      //       return p1;
      //     })
      //     .replace(/:::\s?demo\s?([^]+?):::/g, (match, p1, offset) => {
      //       const id = offset.toString(36);
      //       this.components.set(id, React.createElement(Demo, this.props, p1));
      //       return `<div id=${id}></div>`;
      //     }), { renderer: this.renderer }
      // );

      return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return <span />;
  }
}