import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import appRouterConfig from './appRouterConfig';

function NotFound () {
//   location.href = '/404'
  return null
}
// 嵌套组件
function Renderchildren (props) {
  let { config, location } = props
  let { pathname } = location
  let Parent = lazy(() => import(`@/pages/${config.component}`))
  function checkPath (pathname, config) {
    if (pathname ===  config.path) return true
    if (config.children && config.children.some(child => config.path + '/' + child.path === pathname)) return true
    return false
  }
  console.log(checkPath(pathname, config), pathname, config.path, config.children)
  return checkPath(pathname, config)
          ? <Parent>
              {config.children.map(
                child => (
                  <Route key={config.path + '/' + child.path} path={config.path + '/' + child.path} exact component={lazy(() => import(`@/pages/${child.component}`))}></Route>
                )
              )}
            </Parent>
          : <NotFound></NotFound>
}

function RouterConfig () {
  const basename = window.__POWERED_BY_QIANKUN__ ? '/react' : '/'
  return (
    <Router basename={basename}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        <Route path="/" exact render={() => (<Redirect to="/index"></Redirect>)}></Route>
        {appRouterConfig.map(item => (
          !item.nesting && (!item.children || !item.children.length)
            ? <Route key={item.path} path={item.path} exact component={lazy(() => import(`@/pages/${item.component}`))}></Route>
            : item.nesting
              ? <Route key={item.path} path={item.path}>
                  <Route path={`${item.path}${item.params}?`} component={lazy(() => import(`@/pages/${item.component}`))}></Route>
                </Route>
              : item.children && item.children.length
                ? <Renderchildren key={item.path} config={item}></Renderchildren>
                : null
        ))}
        <Route component={NotFound}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterConfig;
