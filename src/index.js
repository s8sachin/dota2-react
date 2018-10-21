import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import reducers from './reducers';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

const rootElement = document.getElementById('root');
const app         = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);
ReactDom.render(app, rootElement);
serviceWorker.unregister();
