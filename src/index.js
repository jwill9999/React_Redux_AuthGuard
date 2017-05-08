import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import reducers from './reducers';

import Resources from './components/resource';
import App from './components/app';
import  AuthGuard  from './services/auth_service';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/resources" component={AuthGuard(Resources)}></Route>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));


// Here we import our higher order function AuthGuard(Authentication) and pass it
// our component to render. This in turn uses our service Auth_service
// to check any logic to guard our route. See auth_service to view logic