import React, { Component } from 'react'
import cx from 'classnames';
import styles from './loginContainer.css';
import SocialLogin from '../SocialLogin/socialLogin';
import {Link} from 'react-router';

class LoginContainer extends Component {

	constructor (props) {
		super(props);
	}

	componentDidMount () {
		document.body.classList.add('no-scroll');
	}
	
	componentWillUnmount () {
		document.body.classList.remove('no-scroll');
	}

	hidePopup () {
		this.props.hideLoginPopup();
	}	
	
	render() {
		return	<div className={cx(styles['main'])}> 
			<div className='overlay' onClick={this.hidePopup.bind(this)}/>
			<div className={cx(styles['container'])}>
				<div className={cx(styles['title'])}>
					Login
				</div>
				<SocialLogin/>
				{this.props.closeToHome ? 
				<div className={cx(styles['message'])}>
					<Link to='/'>Close</Link>
				</div>
				: 
				<div onClick={this.hidePopup.bind(this)} className={cx(styles['message'])}>
					Close
				</div>}
			</div>	
		</div>
	}
}

export default LoginContainer;
