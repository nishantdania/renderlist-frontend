import React, { Component } from 'react'
import cx from 'classnames';
import styles from './header.css';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';

import LoginContainer from '../LoginContainer/loginContainer';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showLoginPopup : false
		}
		this.loginClickHandler = this.loginClickHandler.bind(this);
		this.hideLoginPopup = this.hideLoginPopup.bind(this);
	}

	loginClickHandler () {
		this.setState({
			showLoginPopup : true
		});
	}

	hideLoginPopup () {
		this.setState({
			showLoginPopup : false
		});
	}

	render() {
		return <div className={cx(styles['main'], 'row')}>
			<div className={cx('row', styles['outer'])}>
				<div className={cx(styles['inner'], 'row')}>
					<div className={cx('col-10', styles['logo-container'])}>
						<Link to='/'>
							<img className={cx(styles['logo-img'])} src='assets/logo-32.png'/>
							RenderList
						</Link>
						<div onClick={this.loginClickHandler} className={cx(styles['links-static'])}>
							Login
						</div>
					</div>
					<div className={cx(styles['links-dynamic'], 'col-2')}>
						<ul>
							<Link to='/about'><li>About</li></Link>
							<Link to='/contact'><li>Contact</li></Link>
						</ul>
					</div>
				</div>
			</div>	
			{this.state.showLoginPopup ? <LoginContainer hideLoginPopup={this.hideLoginPopup}/> : null}
		</div>
	}
}

export default Header;

