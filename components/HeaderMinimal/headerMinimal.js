import React, { Component } from 'react';
import styles from './headerMinimal.css';
import cx from 'classnames';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import AccountsDropdown from '../AccountsDropdown/accountsDropdown';
import { fetchUserStateAction } from '../../actions/userStateActions.js';
import {bindActionCreators} from 'redux';
import LoginContainer from '../LoginContainer/loginContainer';
import { isCompleted } from '../../utils/asyncStatusHelper';

class HeaderMinimal extends Component {
	constructor (props) {
		super(props);
		this.onLoginClick = this.onLoginClick.bind(this);
		this.onProfileClick = this.onProfileClick.bind(this);
		this.state = {
			loginClicked : false,
			profileClicked : false
		}
		if (!this.props.userState.isLoggedIn) this.props.fetchUserState();
	}

	onLoginClick () {
		this.setState({
			loginClicked : !this.state.loginClicked		
		});
	}

	onProfileClick () {
		this.setState({
			profileClicked : !this.state.profileClicked		
		});
	}

	render () {
		const { isLoggedIn, user } = this.props.userState;
		const { name, profilePhoto } = user || {};

		return <div className={cx(styles['outer'], 'clearfix')}>
			<div className={cx(styles['logo'])}>
				<Link to='/'>
					<img className={cx(styles['icon'])} src='assets/logo.png'/>
					RenderList
				</Link>
			</div>
			<div className={cx(styles['navbar'])}>
				<ul className={cx(styles['navList'])}>
					<li><Link to='/about'>About</Link></li>
				{ !isLoggedIn && isCompleted(this.props.userState) ? <li onClick={this.onLoginClick}>
						Login
					</li> 
				: <li onClick={this.onProfileClick} className={cx(styles['userName'])}>
					<div>
					<img className={cx(styles['profilePhoto'])} src={profilePhoto}/>
					{name}
					{this.state.profileClicked ? <AccountsDropdown onBlur={this.onProfileClick}/> : null}
					</div>
				</li> }
				</ul>
			</div>
			{this.state.loginClicked ? <LoginContainer closeClicked={this.onLoginClick}/> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMinimal);
