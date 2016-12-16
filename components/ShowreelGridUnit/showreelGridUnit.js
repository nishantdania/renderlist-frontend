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
				</div>
				<div className={cx(styles['bottom-container'])}>
					<div className={cx(styles['bottom-inner-container'])}>
						<div className={cx(styles['profile-picture'])}>
							<img src='../assets/photo.jpg'/>
						</div>
						<div className={cx(styles['profile-name'])}>
							<span><strong>Nishant</strong></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ShowreelGridUnit;
