import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 引入乾坤配置路径
import './public-path'

function render(props = {}) {
  const { container } = props
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 启用
export async function bootstrap() {
  console.log('bootstrap:=====> React 子应用 已启用')
}
// 挂载
export async function mount(props) {
  console.log('mount:=====> React 子应用 已挂载')
  render(props)
}
// 卸载
export async function unmount(props) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
  console.log('unmount:=====> React 子应用 已卸载')
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
