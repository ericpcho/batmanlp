import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer.js';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
