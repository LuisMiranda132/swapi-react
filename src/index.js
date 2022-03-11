import React from 'react';
import reducer from './reducers';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const store = createStore( reducer , middleware );

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>, document.getElementById('root')
);
