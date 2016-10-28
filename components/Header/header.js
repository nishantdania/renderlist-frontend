import React, { Component } from 'react'
import cx from 'classnames';
import styles from './header.css';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';

import LoginContainer from '../LoginContainer/loginContainer';
import ButtonRound from '../ButtonRound/buttonRound';

class Header extends Component {

	constructor (props) {
		super(props);
		this.onLoginClick = this.onLoginClick.bind(this);
		this.state = {
			loginClicked : false
		}
		this.props.fetchUserState();
	}

	onLoginClick () {
		this.setState({
			loginClicked : !this.state.loginClicked		
		});
	}

	render() {
		return <div className={cx(styles['container'])}>
			<div className={cx(styles['innerBox'])}>
				<div className={cx(styles['logo'])}>RenderList</div>
				<div className={cx(styles['navbar'])}>
					<ul className={cx(styles['navList'])}>
						<li><Link to='/about'>About</Link></li>
						<li onClick={this.onLoginClick}>
							Login
						</li>
						<li>
							<ButtonRound title='List your studio'/>
						</li>
								
					</ul>
				</div>
			</div>
			<div className={cx(styles['subtitle'])}>
				Find the best animation and film studios around the world ! 	
			</div>
			{this.state.loginClicked ? <LoginContainer closeClicked={this.onLoginClick}/> : null}
		</div>

	}
}

function mapStateToProps (state) {
	return {

	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchUserState : fetchUserStateAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

