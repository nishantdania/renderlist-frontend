import React from 'react';
import {render} from 'react-dom';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment';

let preloadedState = null;

if (ExecutionEnvironment.canUseDOM) {
	preloadedState = window.__PRELOADED_STATE__;
}

let store = {};
if(preloadedState) {
	if (process.env.NODE_ENV != 'production')
		store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
	else
		store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk)));
	delete window.__PRELOADED_STATE__;
	let pre = document.getElementById('preload-script-rl');
	pre.parentNode.removeChild(pre);
}

render ((
	<Provider store={store}>
		<Router history={ browserHistory }>{routes}</Router>
	</Provider>
), document.getElementById('container'))
