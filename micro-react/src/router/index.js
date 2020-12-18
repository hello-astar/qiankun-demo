import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));

function RouterConfig () {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/index"></Redirect>)}></Route>
          <Route path="/index" component={Home}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default RouterConfig;
