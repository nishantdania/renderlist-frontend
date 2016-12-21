import React, { Component } from 'react'
import cx from 'classnames';
import styles from './videoWindow.css';

class VideoWindow extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		document.body.classList.add('no-scroll');
	}
	
	componentWillUnmount () {
		document.body.classList.remove('no-scroll');
	}

	closeVideo () {
		this.props.closeVideo();
	}

	render () {
		return <div className={cx(styles['main'])}>
			<div onClick={this.closeVideo.bind(this)} className={cx('overlay')}></div>
			<img className={cx(styles['close'])} src='../assets/close-icon.svg'/>
			<div className={cx(styles['video-container-outer'])}>
				<div className={cx(styles['video-container-inner'])}>
					<iframe id='iframe' src={this.props.url} 
						width='100%' height='100%' frameBorder='0' 
						allowFullScreen/>
				</div>
			</div>
		</div>
	}
}

export default VideoWindow;
