import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './routes/routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
