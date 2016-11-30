if (typeof window === 'undefined') {
	global.window = {};
}
var express = require('express');
var app = express();
var path = require('path');
import React from 'react';
import { match, RouterContext   } from 'react-router';
import { renderToString   } from 'react-dom/server';
import routes from "./routes";
import NotFound from './components/NotFound/notFound';
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Router, browserHistory  } from 'react-router';
import { Provider  } from 'react-redux';
import fetch from 'node-fetch';

app.use(express.static('./build'))
app.use(express.static('./public'))

app.set('views', './');  
app.set('view engine', 'ejs');

global.fetch = fetch;

let store = {};
store = createStore(rootReducer,compose(applyMiddleware(thunk)));

app.get('*', (req, res) => {
	match({ routes, location: req.url   }, (err, redirectLocation, renderProps) => {
		if (err) {
			return res.status(500).send(err.message);
		}
		if (redirectLocation) {
			return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		}
		let markup;
		if (renderProps) {
			markup = renderToString(<Provider store={store}><RouterContext {...renderProps}/></Provider>);
		} else {
			markup = renderToString(<NotFoundPage/>);
			res.status(404);
		}
			const preloadedState = store.getState();
			return res.render('index', {markup, preloadedState});
		}
	);
});

app.listen(8080, function(){
	console.log('Server Listening to port 8080');
});
