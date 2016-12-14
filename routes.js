import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Root from './components/Root/root';
import About from './components/About/about';
import NotFound from './components/NotFound/notFound';
import Redirect from './components/Redirect/redirect';
import LandingPage from './components/LandingPage/landingPage';
import AddStudio from './components/AddStudio/addStudio';
import Contact from './components/Contact/contact';
import Homepage from './components/Homepage/homepage';

const routes = ( 
<Route>
	<Route name='root' component={Root}>
		<Route path='/' component={Homepage}/>
		<Route path='/about' name='about' component={About}/>
		<Route path='/addStudio' name='addStudio' component={AddStudio}/>
		<Route path='/redirect' name='redirect' component={Redirect}/>
		<Route path='/contact' name='contact' component={Contact}/>
		<Route path='*' name='notFound' component={NotFound}/>
	</Route>
</Route>
);
export default routes;
