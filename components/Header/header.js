import React, { Component } from 'react'
import cx from 'classnames';
import styles from './header.css';
import { Link, browserHistory } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';

import LoginContainer from '../LoginContainer/loginContainer';

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showLoginPopup : false,
			showMenu : false,
			width : window.innerWidth
		}
		this.loginClickHandler = this.loginClickHandler.bind(this);
		this.hideLoginPopup = this.hideLoginPopup.bind(this);
		this.hamburgerClickHandler = this.hamburgerClickHandler.bind(this);
		this.searchHandler = this.searchHandler.bind(this);
		this.setSize = this.setSize.bind(this);
	}

	componentDidMount () {
		window.addEventListener('resize', this.setSize);
	}

	setSize() {
		this.setState({
			width: window.innerWidth
		});
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
		
	hamburgerClickHandler () {
		this.setState({
			showMenu : !this.state.showMenu
		});
	}

	searchHandler (e) {
		if (e.keyCode == 13) {
			let query = this.refs.search.value;
			if(query.length > 0) {
				let searchLink = '/search?query=' + query;
				browserHistory.push(searchLink);
				console.log('here');
			}
			return false;
		}
	}

	render() {
		return <div className={cx(styles['main'], 'row')}>
			<div className={cx('row', styles['outer'])}>
				<div className={cx(styles['inner'], 'row')}>
					<div className={cx('col-8', styles['logo-container'])}>
						<img onClick={this.hamburgerClickHandler} className={cx(styles['hamburger'])} src='../assets/hamburger.svg'/>
						<Link to='/'>
							<img className={cx(styles['logo-img'])} src='assets/logo-32.png'/>
							RenderList
						</Link>
						<div onClick={this.loginClickHandler} className={cx(styles['links-static'])}>
							Login
						</div>
					</div>
					<div onClick={this.hamburgerClickHandler} className={cx(styles['links-dynamic'], 'col-4', {['hidden'] : !this.state.showMenu && this.state.width < 768})}>
						<ul>
							<Link to='/about'><li>About</li></Link>
							<Link to='/contact'><li>Contact</li></Link>
							<li><div><input className={cx(styles['search-input'])} onKeyUp={this.searchHandler.bind(this)} placeholder='Search' ref='search'/></div></li>
						</ul>
					</div>
				</div>
			</div>	
			{this.state.showLoginPopup ? <LoginContainer hideLoginPopup={this.hideLoginPopup}/> : null}
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
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

