import React, { Component } from 'react';
var Router = require('react-router');

class Redirect extends Component {
	
	componentWillMount () {
		if(window.localStorage) {
			localStorage.setItem("token", this.props.location.query.token);
		}
		if(this.props.location.query.hasStudio) {
			Router.browserHistory.replace('/');
		}
		else {
			Router.browserHistory.replace('/addStudio');
		}
	}

	render() {
		return <div>
			Redirecting...
		</div>
	};
};

export default Redirect;

