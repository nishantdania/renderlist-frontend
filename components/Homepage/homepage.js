import React, { Component } from 'react';
import styles from './homepage.css';
import cx from 'classnames';
import { Link } from 'react-router';

import ButtonPrimary from '../ButtonPrimary/buttonPrimary';
import ShowreelGrid from '../ShowreelGrid/showreelGrid';

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
	
	renderShowreelGridTitle () {
		return <div className={cx(styles['sgTitle-outer'])}>
			<div className={cx(styles['sgTitle-inner'])}>
				<span><strong>All Curated Showreels</strong></span>
			</div>
		</div>
	}

	render () {
		return <div className={cx(styles['main'])}>
			{this.renderSubtitle()}	
			{this.renderShowreelGridTitle()}
			<ShowreelGrid/>
			{this.renderCommunityBanner()}
		</div>
	}
}

export default Homepage;
