import React, { Component } from 'react';
import styles from './homepage.css';
import cx from 'classnames';
import { Link } from 'react-router';

import ButtonPrimary from '../ButtonPrimary/buttonPrimary';

class Homepage extends Component {
	constructor (props) {
		super(props);
	}

	renderSubtitle () {
		return <div>
			<div className={cx('row')}>
				<div className={cx('col-12')}>
					<div className={cx(styles['subtitle'])}>
						<div className={cx(styles['subtitle-text'])}>
							Featuring artists from around the globe. Get your work recognised.
						</div>
						<div className={cx(styles['subtitle-button'])}>
							<Link to='/addStudio'><ButtonPrimary className={cx(styles['button-custom-st'])} title='Add showreel'/></Link>
						</div>
					</div>
				</div>	
			</div>
		</div>
	}

	renderCommunityBanner () {
		return <div>
			<div className={cx('row', styles['banner-main'])}>
				<div className={cx(styles['banner-l1'])}><span>1800 seconds</span> rendered</div>
				<div className={cx(styles['banner-l2'])}>Be a part of the RenderList Community</div>
				<div className={cx(styles['banner-button'])}>
					<Link to='/addStudio'><ButtonPrimary title='Add showreel'/></Link>
				</div>
			</div>
		</div>
	}	

	render () {
		return <div className={cx(styles['main'])}>
			{this.renderSubtitle()}	
			{this.renderCommunityBanner()}
		</div>
	}
}

export default Homepage;
