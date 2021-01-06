import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';


if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

function render (props = {}) {
  const { container } = props;
  ReactDOM.render(<App/>, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap () {
  console.log('[react16] react app boostraped');
}

export async function mount (props) {
  console.log('[react16] react app mount, props from main framework', props);
  props.onGlobalStateChange && props.onGlobalStateChange((value, prev) => {
    console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev);
  }, true);
  props.setGlobalState && props.setGlobalState({ msg: 'react16' });
  render(props);
}

export async function unmount (props) {
  console.log('[react16] react app unmount, props from main framework', props)
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterConfig></RouterConfig>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


