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
		return <div className={cx(styles['main'], 'row')}>
			<div className={cx('row', styles['outer'])}>
				<div className={cx(styles['inner'], 'row')}>
					<div className={cx('col-10', styles['logo-container'])}>
						<Link to='/'>
							<img className={cx(styles['logo-img'])} src='assets/logo-32.png'/>
							RenderList
							<div className={cx(styles['links-static'])}>
								Login
							</div>
						</Link>
					</div>
					<div className={cx(styles['links-dynamic'], 'col-2')}>
						<ul>
							<Link to='/about'><li>About</li></Link>
							<Link to='/contact'><li>Contact</li></Link>
						</ul>
					</div>
				</div>
			</div>	
		</div>
	}
}

export default Header;

