import React, { Component } from 'react'
import cx from 'classnames';
import styles from './showreelGridUnit.css';

class ShowreelGridUnit extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		const showreel = this.props.showreel;
		return <div>{showreel ? <div className={cx(styles['main'])}>
			<div className={cx(styles['container'])}>
				<div className={cx(styles['upper-container'])}>
					<div className={cx(styles['video-container'])}>
						<img src={showreel.thumbnail}/>
					</div>
				</div>
				<div className={cx(styles['bottom-container'])}>
					<div className={cx(styles['bottom-inner-container'])}>
						<div className={cx(styles['profile-picture'])}>
							<img src={showreel.userProfilePhoto}/>
						</div>
						<div className={cx(styles['profile-name'])}>
							<span><strong>{showreel.name}</strong></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		: null}
		</div>
	}
}

export default ShowreelGridUnit;
