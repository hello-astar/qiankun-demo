import App from '../App.js';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createHashHistory } from "history";
const history = createHashHistory();

function RouterConfig () {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/index"></Redirect>)}></Route>
        <Route path="/index" component={App}></Route>
      </Switch>
    </Router>
  )
}

export default RouterConfig;
