import React from 'react';
import {render} from 'react-dom';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let store = {};
if (process.env.NODE_ENV === 'development')
	store = createStore(rootReducer,compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
else
	store = createStore(rootReducer,compose(applyMiddleware(thunk)));

render ((
	<Provider store={store}>
		<Router history={ browserHistory }>{routes}</Router>
	</Provider>
), document.getElementById('container'))
