import * as React from 'react'
import * as ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import * as createLogger from 'redux-logger';

import reducer from './Reducers';

const middleWares = [ thunk, createLogger() ];

const store = createStore(
    reducer,
    compose(
        applyMiddleware(...middleWares),
        window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <Routes />
    </Provider>,
    document.querySelector('#root')
);
