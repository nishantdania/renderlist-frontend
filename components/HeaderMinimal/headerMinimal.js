import React, { Component } from 'react';
import styles from './headerMinimal.css';
import cx from 'classnames';
import { Link } from 'react-router';

class HeaderMinimal extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['outer'], 'clearfix')}>
			<div className={cx(styles['logo'])}>
				<Link to='/'>
					<img className={cx(styles['icon'])} src='assets/logo.png'/>
					RenderList
				</Link>
			</div>
			<div className={cx(styles['link'])}><Link to='/about'>About</Link></div>
		</div>
	}
}	

export default HeaderMinimal;
