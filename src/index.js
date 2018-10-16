import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/login.css';
import './css/timeline.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import Timeline from './components/Timeline';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/timeline" component={Timeline}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
