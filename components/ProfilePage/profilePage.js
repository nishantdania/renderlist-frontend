import React, { Component } from 'react'
import cx from 'classnames';
import styles from './profilePage.css';
import { connect  } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import {bindActionCreators} from 'redux';
import {getProfileAction, clearProfileAction, incViewsAction, incLikesAction} from '../../actions/profileActions';
import { isCompleted, isLoading } from '../../utils/asyncStatusHelper';
import Tag from '../Tag/tag';
import ButtonPrimary from '../ButtonPrimary/buttonPrimary';

class ProfilePage extends Component {
	constructor (props) {
		super(props);
		this.tagClickHandler = this.tagClickHandler.bind(this);
		this.state = {
			liked : false
		};
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

	tagClickHandler (query) {
		let searchLink = '/search?query=' + query;
		browserHistory.push(searchLink);
	}

	likeClickHandler () {
		if (this.props.profile.data.sid && !this.state.liked) {
			this.props.incLikes(this.props.profile.data.sid);
			this.setState({liked : true});
		}
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
			{ isCompleted(this.props.profile) && data ? <div className={cx(styles['main'])}>
			<div className={cx('row', styles['inner'])}>
				<Link to='/editProfile'><ButtonPrimary title='Edit Profile'/></Link>
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
						{!this.state.liked ? <img onClick={this.likeClickHandler.bind(this)} className={cx(styles['like-icon'])}  src='../assets/like-icon.svg'/>
						: <img src='../assets/like-icon-filled.svg'/>
						}
						{!this.state.liked ? <span>{data.likes} likes</span> : <span>{data.likes + 1} likes</span>}
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
							{data.tags.map((tag, index) =>
								<li onClick={this.tagClickHandler.bind(this, tag)} key={index}><Tag text={tag}/></li>
							)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div> : null}
		{!isLoading(this.props.profile) && !data?
			<div className={cx(styles['no-profile'])}>Sorry ! The page you are looking for does not exist.</div>	
		: null}
		{isLoading(this.props.profile) ?
			<div className={cx(styles['no-profile'])}>Loading...</div>
		 : null}
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
		incViews : incViewsAction,
		incLikes : incLikesAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

