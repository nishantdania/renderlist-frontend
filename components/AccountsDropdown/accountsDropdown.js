import React, { Component } from 'react';
import styles from './accountsDropdown.css';
import cx from 'classnames';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { logoutAction } from '../../actions/userStateActions.js';
import { Router, browserHistory, Link } from 'react-router';

class AccountsDropdown extends Component {

	constructor (props) {
		super(props);
		this.onBlurHandler = this.onBlurHandler.bind(this);
	}	

	onBlurHandler () {
		this.props.onBlur();
	}

	onLogoutClicked () {
		this.props.logout();
		browserHistory.replace('/');		
	}

	render () {
		let profileLink = '/' + this.props.userState.user.username; 
		return <div>
			<div onClick={this.onBlurHandler} className='overlay'/> 
			<div className={cx(styles['outer'])}>
				{profileLink != '/' ? <Link to={profileLink}><div className={cx(styles['option'])}>My Profile</div></Link>:null}	
				<div onClick={this.onLogoutClicked.bind(this)} className={cx(styles['option'])}>Logout</div>			
			</div>
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
		logout : logoutAction
	}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountsDropdown);

