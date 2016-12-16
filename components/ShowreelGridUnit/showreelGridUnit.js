import React, { Component } from 'react'
import cx from 'classnames';
import styles from './showreelGridUnit.css';

class ShowreelGridUnit extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['main'])}>
			<div className={cx(styles['container'])}>
				<div className={cx(styles['upper-container'])}>
					<div className={cx(styles['video-container'])}></div>
					<div className={cx(styles['overlay-container'])}>
						<div className={cx(styles['like-container'])}>
							<img src='../assets/like-border-icon.svg'/>
							<span>1200</span>
						</div>
						<div className={cx(styles['location-container'])}>
							<span>Glendale</span>
						</div>
					</div>
				</div>
				<div className={cx(styles['bottom-container'])}>
					<div className={cx(styles['bottom-inner-container'])}>
						<div className={cx(styles['profile-picture'])}>
							<img src='../assets/photo.jpg'/>
						</div>
						<div className={cx(styles['profile-name'])}>
							<span>Nishant</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ShowreelGridUnit;
