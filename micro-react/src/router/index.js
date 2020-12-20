import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import appRouterConfig from './appRouterConfig';

function RouterConfig () {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/index"></Redirect>)}></Route>
          {appRouterConfig.map(item => (
            <Route key={item.path} path={item.path} component={lazy(() => import(`@/pages/${item.component}`))}></Route>
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterConfig;
