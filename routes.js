import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Root from './components/Root/root';
import About from './components/About/about';
import NotFound from './components/NotFound/notFound';
import Redirect from './components/Redirect/redirect';
import LandingPage from './components/LandingPage/landingPage';

const routes = ( 
<Route>
	<Route path='/' name='landingPage' component={LandingPage}/>
	<Route path='/about' name='about' component={About}/>
	<Route path='/redirect' name='redirect' component={Redirect}/>
	<Route path='*' name='notFound' component={NotFound}/>
</Route>
);
export default routes;
