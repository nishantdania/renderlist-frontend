import React, { Component } from 'react'
import cx from 'classnames';
import styles from './loginContainer.css';
import SocialLogin from '../SocialLogin/socialLogin';

class LoginContainer extends Component {

	constructor (props) {
		super(props);
		this.closeClicked = this.closeClicked.bind(this);
	}

	closeClicked () {
		this.props.closeClicked();
	}	

	render() {
		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['title'])}>
				Login	
			</div>
			<SocialLogin/>
			<div onClick={this.closeClicked} className={cx(styles['close'])}>Close</div>
		</div>
	}
}

export default LoginContainer;
