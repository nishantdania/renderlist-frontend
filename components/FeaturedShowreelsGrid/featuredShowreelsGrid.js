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
			<div className={cx(styles['inner'])}>
				<div className={cx(styles['title'])}><strong>Featured Showreel</strong></div>
				<div>by</div>
				<div>
					<Link to={config['featured-profile-link']}>
						<div className={cx(styles['data'])}>
							<img src='../assets/photo.jpg'/>
							<span>Nishant Dania</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	}
}

export default FeaturedShowreelsGrid;
