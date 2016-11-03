import React, { Component } from 'react';
import styles from './landingPage.css';
import cx from 'classnames';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import { isSuccess, isCompleted } from '../../utils/asyncStatusHelper';
import { fetchUserStateAction } from '../../actions/userStateActions.js';
import {bindActionCreators} from 'redux';

import LoginContainer from '../LoginContainer/loginContainer';

class LandingPage extends Component {
	constructor (props) {
		super(props);
		this.loginClicked = this.loginClicked.bind(this);
		this.state = {
			loginClicked : false
		}
	}
	
	componentWillMount () {
		if (!this.props.userState.isLoggedIn) this.props.fetchUserState();
	}

	loginClicked () {
		this.setState({
			loginClicked : !this.state.loginClicked
		});
	}

	notLoggedInTitle () {
		return <div>
			<div className={cx(styles['title'])}>
				<p>Listing the showreels of artists and</p><p>studios from around the world</p>
			</div>
			<div className={cx(styles['subtitle'])}>
				Showcase your work and be a part of the community. Join now to get listed for the launch.
			</div>
			<div onClick={this.loginClicked} className={cx(styles['cta'])} >
				Join Now
			</div>
		</div>;
	}

	loggedInTitle () {
		return <div>
			<div className={cx(styles['title'])}>
				<p>Thank You for registering on Renderlist</p>
			</div>
			<div className={cx(styles['subtitle'])}>
				You will soon be notified when the official launch happens !
			</div>
		</div>;
	}

	render () {
		const { isLoggedIn } = this.props.userState;

		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['img-container'])}>
				<img className={cx(styles['image'])} src='assets/tab.png'/>
			</div>
			{isCompleted(this.props.userState) && !isLoggedIn ? this.notLoggedInTitle(): this.loggedInTitle()}
			{this.state.loginClicked ? <LoginContainer closeClicked={this.loginClicked}/> : null}
		</div>
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

