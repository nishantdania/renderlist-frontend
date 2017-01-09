import React, { Component } from 'react'
import cx from 'classnames';
import styles from './showreelGridUnit.css';
import { Link } from 'react-router';
import VideoWindow from '../VideoWindow/videoWindow';

class ShowreelGridUnit extends Component {
	constructor (props) {
		super(props);
		this.state = {
			openVideo : false
		}
	}

	handlePlayClicked () {
		this.setState({
			openVideo : true
		});
	}

	closeVideo () {
		this.setState({
			openVideo : false
		});
	}

	render () {
		const showreel = this.props.showreel;
		const link = '/' + this.props.showreel.username;
		let videoId = showreel.showreelURL.split("/");
		videoId = videoId[videoId.length - 1];
		const videoUrl = 'https://player.vimeo.com/video/' + videoId + '?title=0&byline=0'; 

		return <div>{showreel ? <div className={cx(styles['main'])}>
			{this.state.openVideo ? <VideoWindow closeVideo={this.closeVideo.bind(this)} url={videoUrl}/> : null}
			<div className={cx(styles['container'])}>
				<div className={cx(styles['upper-container'])}>
					<div className={cx(styles['video-container'])}>
						<img src={showreel.thumbnail}/>
					</div>
					<div onClick={this.handlePlayClicked.bind(this)} className={cx(styles['play-button-container'])}>
						<div className={cx(styles['play-button'])}>
							<img src='../assets/play-icon.png'/>
						</div>
					</div>
				</div>
				<Link to={link}>
					<div className={cx(styles['bottom-container'])}>
						<div className={cx(styles['bottom-inner-container'])}>
							<div className={cx(styles['profile-picture'])}>
								<img src={showreel.userProfilePhoto}/>
							</div>
							<div className={cx(styles['profile-name'])}>
								<span><strong title={showreel.name}>{showreel.name}</strong></span>
							</div>
							<div className={cx(styles['city'])}>
								<span title={showreel.city}>{showreel.city}</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
		: null}
		</div>
	}
}

export default ShowreelGridUnit;
