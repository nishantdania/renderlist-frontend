import React, { Component } from 'react'
import cx from 'classnames';
import styles from './featuredShowreelsGrid.css';
import { Link } from 'react-router';
import config from '../../config.json';

class FeaturedShowreelsGrid extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['main'])}>
			<Link to={config['featured-profile-link']}>
			<div className={cx(styles['inner'])}>
				<div className={cx(styles['title'])}><strong>Featured Showreel</strong></div>
				<div>by</div>
				<div>
						<div className={cx(styles['data'])}>
							<span>{config['featured-profile-name']}</span>
						</div>
				</div>
			</div>
			</Link>
		</div>
	}
}

export default FeaturedShowreelsGrid;
