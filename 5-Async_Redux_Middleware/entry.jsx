import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import About from './components/static/About.jsx';
import RedditPage from './components/reddit/RedditPage.jsx';
import NoMatch from './components/static/NoMatch.jsx';
import App from './App.jsx';

const store = configureStore();

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ RedditPage } />
        <Route path="/about" component={ About } />
        <Route path='*' component={ NoMatch } />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
