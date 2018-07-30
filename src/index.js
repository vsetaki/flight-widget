import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import rootReducer from './reducers';
import FlightsWidget from './containers/FlightsWidget';

dayjs.locale('ru');

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

ReactDOM.render((
  <Provider store={store}>
    <FlightsWidget />
  </Provider>
), document.getElementById('root'));
