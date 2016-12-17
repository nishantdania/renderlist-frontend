import React, { Component } from 'react'
import cx from 'classnames';
import styles from './featuredShowreelsGrid.css';

class FeaturedShowreelsGrid extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['main'])}>
			<div className={cx(styles['inner'])}>
				<div className={cx(styles['title'])}><strong>Featured Showreel</strong></div>
				<div className={cx(styles['data'])}>
					<img src='../assets/photo.jpg'/>
					<span>Nishant Dania</span>
				</div>
			</div>
		</div>
	}
}

export default FeaturedShowreelsGrid;
