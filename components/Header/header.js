import React, { Component } from 'react'
import cx from 'classnames';
import styles from './header.css';
import { Link } from 'react-router';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';

class Header extends Component {
	constructor (props) {
		super(props);
	}

	render() {
		return <div className={cx(styles['main'])}>
			<div className={cx('row', styles['outer'])}>
				<div className={cx(styles['inner'], 'row')}>
					<div className={cx('col-12')}>
						<div className={cx('col-2', styles['logo-container'])}>
							<img className={cx(styles['logo-img'])} src='assets/logo-32.png'/>
							RenderList
						</div>
						<div className={cx('col-10')}>
						</div>
					</div>
				</div>
			</div>	
			<div className={cx(styles['subtitle'], 'row')}>
				
			</div>
		</div>
	}
}

export default Header;

