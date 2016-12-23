import React, { Component } from 'react'
import styles from './heroTitle.css';
import cx from 'classnames';

class HeroTitle extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['main'])}>
			{this.props.title}
		</div>
	}
}

export default HeroTitle;
