import React, { Component } from 'react'
import cx from 'classnames';
import styles from './loginContainer.css';
import SocialLogin from '../SocialLogin/socialLogin';
import ButtonRound from '../ButtonRound/buttonRound';

class LoginContainer extends Component {

	constructor (props) {
		super(props);
		this.closeClicked = this.closeClicked.bind(this);
	}

	closeClicked () {
		this.props.closeClicked();
	}	
	
	render() {
		return	<div> 
			<div onClick={this.closeClicked} className='overlay-black'/>
			<div className={cx(styles['outer'])}>
				<div className={cx(styles['title'])}>
					Welcome to RenderList !	
				</div>
				<SocialLogin/>
				<div onClick={this.closeClicked} className={cx(styles['close'])}>
					<ButtonRound title='Close'/>
				</div>
			</div>
		</div>
	}
}

export default LoginContainer;
