import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

const rootElement = document.getElementById('root');
const app         = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
);
ReactDom.render(app, rootElement);
serviceWorker.unregister();
