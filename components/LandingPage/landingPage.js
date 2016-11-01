import React, { Component } from 'react';
import styles from './landingPage.css';
import cx from 'classnames';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';

import LoginContainer from '../LoginContainer/loginContainer';

class LandingPage extends Component {
	constructor (props) {
		super(props);
		this.loginClicked = this.loginClicked.bind(this);
		this.state = {
			loginClicked : false
		}
	}

	loginClicked () {
		this.setState({
			loginClicked : !this.state.loginClicked
		});
	}

	render () {
		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['img-container'])}>
				<img className={cx(styles['image'])} src='assets/tab.png'/>
			</div>
			<div className={cx(styles['title'])}>
				<p>Listing the showreels of artists and</p><p>studios from around the world</p>
			</div>
			<div className={cx(styles['subtitle'])}>
				Showcase your work and be a part of the community. Join now to get listed for the launch.
			</div>
			<div onClick={this.loginClicked} className={cx(styles['cta'])} >
				Join Now
			</div>
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

