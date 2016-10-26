import React from 'react'
import GoogleLogin from '../GoogleLogin/googleLogin';
import Header from '../Header/header';

export default React.createClass({
	render() {
		return <div>
			<Header/>
			<GoogleLogin/>
		</div>
	}
});
