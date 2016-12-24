import React, { Component } from 'react'
import cx from 'classnames';
import styles from './profilePage.css';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfileAction, clearProfileAction, incViewsAction} from '../../actions/profileActions';
import { isCompleted } from '../../utils/asyncStatusHelper';

class ProfilePage extends Component {
	constructor (props) {
		super(props);
	}

	componentWillMount () {
		this.props.getProfile(this.props.location.pathname.substr(1));
	}	

	componentDidMount () {
		document.title = this.props.location.pathname.substr(1) + ' on RenderList';
		window.scrollTo(0, 0);
		this.props.incViews(this.props.location.pathname.substr(1));
	}

	componentWillUnmount () {
		this.props.clearProfile();	
	}

	render () {
		const { data } = this.props.profile;
		let date = new Date();
		let video_url = '';
		if (data && data.ts) {
			date = new Date(data.ts);
			let showurl = data.showreelURL;
			var str = showurl.split("/");
			video_url = 'https://player.vimeo.com/video/' + str[str.length - 1] +'?title=0&byline=0';
		}	
		return <div>
			{ isCompleted(this.props.profile) ? <div className={cx(styles['main'])}>
			<div className={cx('row', styles['inner'])}>
				<div className={cx(styles['name'])}>
					<img src={data.profilePhoto}/>
					<span>{data.name}</span>
					<div className={cx(styles['location'])}>
						<img src='../assets/location-icon.svg'/>
						<span>{data.city}</span>
					</div>
				</div>
				<div className={cx('col-12', styles['video-container-outer'])}>
					<div className={cx(styles['video-container-inner'])}>
						<iframe id='iframe' src={video_url} 
							width='100%' height='100%' frameBorder='0' 
							allowFullScreen/>
					</div>
				</div>
				<div className={cx('col-12', styles['bottom-panel'])}>
					<div className={cx('clearfix', styles['like-container'])}>
						<img src='../assets/like-icon.svg'/>
						<span>{data.likes} likes</span>
						<img src='../assets/eye-icon.svg'/>
						<span>{data.views} views</span>
						<div className={cx(styles['date'])}>Published on {date.toLocaleString()}</div>
					</div>
					<div className={cx(styles['data'])}>
						<div className={cx(styles['title'])}>Contact Info</div>	
						<div className={cx(styles['contact-info-container'])}>
							<div className={cx('clearfix', styles['contact-info'])}>
								<img src='../assets/mail-icon.svg'/>
								<span>{data.email}</span>
							</div>
							<div className={cx('clearfix', styles['contact-info'])}>
								<img src='../assets/web-icon.svg'/>
								<span>{data.websiteURL}</span>
							</div>	
						</div>
					</div>
					<div className={cx(styles['data'])}>
						<div className={cx(styles['title'])}>Description</div>
						<span>{data.description}</span>
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
		</div> : null}
		</div>
	}
}

function mapStateToProps (state) {
	return {
		profile : state.profile
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		getProfile : getProfileAction,
		clearProfile : clearProfileAction,
		incViews : incViewsAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

