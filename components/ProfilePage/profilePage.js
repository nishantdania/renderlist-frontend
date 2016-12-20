import React, { Component } from 'react'
import cx from 'classnames';
import styles from './profilePage.css';

class ProfilePage extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['main'])}>
			<div className={cx('row', styles['inner'])}>
				<div className={cx(styles['name'])}>
					<img src='../assets/photo.jpg'/>
					<span>Nishant Dania</span>
					<div className={cx(styles['location'])}>
						<img src='../assets/location-icon.svg'/>
						<span>Pune, India</span>
					</div>
				</div>
				<div className={cx('col-12', styles['video-container-outer'])}>
					<div className={cx(styles['video-container-inner'])}>
						<img src='../assets/featuredShowreel.jpg'/>
					</div>
				</div>
				<div className={cx('col-12', styles['bottom-panel'])}>
					<div className={cx('clearfix', styles['like-container'])}>
						<img src='../assets/like-icon.svg'/>
						<span>1200 likes</span>
						<img src='../assets/eye-icon.svg'/>
						<span>1897 views</span>
						<div className={cx(styles['date'])}>Published on 13th dec, 2016</div>
					</div>
					<div className={cx(styles['data'])}>
						<div className={cx(styles['title'])}>Contact Info</div>	
						<div className={cx(styles['contact-info-container'])}>
							<div className={cx('clearfix', styles['contact-info'])}>
								<img src='../assets/mail-icon.svg'/>
								<span>nishantdania@gmail.com</span>
							</div>
							<div className={cx('clearfix', styles['contact-info'])}>
								<img src='../assets/web-icon.svg'/>
								<span>www.nishantdania.com</span>
							</div>	
						</div>
					</div>
					<div className={cx(styles['data'])}>
						<div className={cx(styles['title'])}>Description</div>
						<span>This is some random description. I dont know what to write here.</span>
					</div>
					<div className={cx(styles['data'])}>
						<div className={cx(styles['title'])}>Tags</div>
						<div>
							<ul>
								<li>animation</li>
								<li>motion reel</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}

export default ProfilePage;
