import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Login } from './components/Login';
import Timeline from './components/Timeline';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('instalura-token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <PrivateRoute path="/timeline" component={Timeline}/>
        <Route path="/" component={Login}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
