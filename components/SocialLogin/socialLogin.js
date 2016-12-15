import React, {Component} from 'react';
import styles from './socialLogin.css';
import cx from 'classnames';

class SocialLogin extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div>{process.env.NODE_ENV == 'production' ? <div className={cx(styles['outer'])}>
				<a href='https://www.renderlist.com/api/auth/facebook?redirect=https://www.renderlist.com/redirect'>
					<div className={cx('clearfix', styles['fb'])}>
						<img src='../assets/fb-icon.png'/>
						<span><strong>Continue with Facebook</strong></span>
					</div>
				</a>
				<a href='https://www.renderlist.com/api/auth/google?redirect=https://www.renderlist.com/redirect'>
					<div className={cx('clearfix', styles['google'])}>
						<img src='../assets/google-icon.png'/>
						<span><strong>Continue with Google</strong></span>
					</div>
				</a>
			</div>
			: <div className={cx(styles['outer'])}>
				<a href='http://localhost:3000/api/auth/facebook?redirect=http://localhost:8080/redirect'>
					<div className={cx('clearfix', styles['fb'])}>
						<img src='../assets/fb-icon.png'/>
						<span><strong>Continue with Facebook</strong></span>
					</div>
				</a>
				<a href='http://localhost:3000/api/auth/google?redirect=http://localhost:8080/redirect'>
					<div className={cx('clearfix', styles['google'])}>
						<img src='../assets/google-icon.png'/>
						<span><strong>Continue with Google</strong></span>
					</div>
				</a>
			</div>}
		</div>
	}

}

export default SocialLogin;

