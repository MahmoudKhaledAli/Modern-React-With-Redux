import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promiseMiddleware from "redux-promise";

import PostsList from './containers/posts_list';
import PostsNew from './containers/posts_new';
import PostsShow from "./containers/posts_show";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/" component={PostsList} />
      </Switch>
    </Router>
  </Provider>
  , document.querySelector('.container'));
