import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from './route'
import './asset/index.less';
import * as serviceWorker from './serviceWorker';
import configStore from './store/index'
// import store from './store/index'
import { Provider } from 'react-redux'


let store = configStore({receive_data:window.__initData__,count:10})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route />
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
