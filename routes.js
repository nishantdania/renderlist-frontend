import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Root from './components/Root/root';
import About from './components/About/about';
import NotFound from './components/NotFound/notFound';
import Redirect from './components/Redirect/redirect';
import LandingPage from './components/LandingPage/landingPage';
import AddStudio from './components/AddStudio/addStudio';

const routes = ( 
<Route>
	<Route name='root' component={Root}>
		<Route path='/' component={LandingPage}/>
		<Route path='/about' name='about' component={About}/>
		<Route path='/addStudio' name='addStudio' component={AddStudio}/>
		<Route path='/redirect' name='redirect' component={Redirect}/>
		<Route path='*' name='notFound' component={NotFound}/>
	</Route>
</Route>
);
export default routes;
