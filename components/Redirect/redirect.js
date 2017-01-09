import React, { Component } from 'react';
var Router = require('react-router');
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';

class Redirect extends Component {
	
	componentDidMount () {
		if(window.localStorage) {
			localStorage.setItem("token", this.props.location.query.token);
			if (!this.props.userState.isLoggedIn) this.props.fetchUserState();
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

function mapStateToProps (state) {
	return {
		userState : state.userState
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchUserState : fetchUserStateAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirect);

