import React, { Component } from 'react';
import styles from './headerMinimal.css';
import cx from 'classnames';

class HeaderMinimal extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['outer'], 'clearfix')}>
			<div className={cx(styles['logo'])}>RenderList</div>
			<div className={cx(styles['link'])}>About</div>
		</div>
	}
}	

export default HeaderMinimal;
