import React, { Component } from 'react'
import cx from 'classnames';
import styles from './loginContainer.css';
import SocialLogin from '../SocialLogin/socialLogin';

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
		console.log('clicked');
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
				<div onClick={this.hidePopup.bind(this)} className={cx(styles['message'])}>
					Close
				</div>
			</div>	
		</div>
	}
}

export default LoginContainer;
