import React, { Component } from 'react';
import styles from './landingPage.css';
import cx from 'classnames';
import HeaderMinimal from '../HeaderMinimal/headerMinimal';

class LandingPage extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['outer'])}>
			<HeaderMinimal/>
			<div className={cx(styles['title'])}>
				<p>Listing the showreels of artists and</p><p>studios from around the world</p>
			</div>
			<div className={cx(styles['subtitle'])}>
				Showcase your work and be a part of the community. Join now to get listed for the launch.
			</div>
			<div className={cx(styles['cta'])}>
				Join Now
			</div>
		</div>
	}
}

export default LandingPage;
