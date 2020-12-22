import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import appRouterConfig from './appRouterConfig';

const NotFound = lazy(() => import('@/pages/404'));


function RouterConfig () {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/index"></Redirect>)}></Route>
          {appRouterConfig.map(item => (
            !item.nesting
            ? <Route key={item.path} path={item.path} exact component={lazy(() => import(`@/pages/${item.component}`))}></Route>
            : <Route key={item.path} path={item.path}>
                <Route path={`${item.path}${item.params}?`} component={lazy(() => import(`@/pages/${item.component}`))}></Route>
              </Route>
          ))}
          <Route path="/" component={NotFound}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterConfig;
