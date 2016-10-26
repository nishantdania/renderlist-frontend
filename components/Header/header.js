import React, { Component } from 'react'
import cx from 'classnames';
import styles from './header.css';
import { Link  } from 'react-router';

class Header extends Component {

	render() {
		return <div className={cx(styles['container'])}>
			<div className={cx(styles['innerBox'])}>
				<div className={cx(styles['logo'])}>RenderList</div>
				<div className={cx(styles['navbar'])}>
					<ul className={cx(styles['navList'])}>
						<li><Link to='/about'>About</Link></li>
						<li>Login</li>
					</ul>
				</div>
			</div>
			<div className={cx(styles['subtitle'])}>
				Find the best animation and film studios around the world ! 	
			</div>
		</div>

	}
}

export default Header;
