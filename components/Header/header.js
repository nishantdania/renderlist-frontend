import React, { Component } from 'react'
import cx from 'classnames';
import styles from './header.css';

class Header extends Component {

	render() {
		return <div className={cx(styles['container'])}>
			<div className={cx(styles['innerBox'])}>
				<div className={cx(styles['logo'])}>RenderList</div>
			</div>
			<div className={cx(styles['subtitle'])}>
				Find the best animation and film studios around the world ! 	
			</div>
		</div>

	}
}

export default Header;
