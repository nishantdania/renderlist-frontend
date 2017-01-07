import React, { Component } from 'react';
import styles from './editProfilePage.css';
import cx from 'classnames';
import { connect  } from 'react-redux';
import { Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {updateProfileAction, getMyProfileAction} from '../../actions/profileActions';
import ButtonPrimary from '../ButtonPrimary/buttonPrimary';
import HeroTitle from '../HeroTitle/heroTitle';
import Tag from '../Tag/tag';

class EditProfilePage extends Component {
	constructor (props) {
		super(props);
		if (this.props.userState.isLoggedIn){
			let username = this.props.userState.user.username;		
			this.props.getMyProfile(username);
			this.state = {
				tags : []
			};
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.profile.myProfile) {
			if (nextProps.profile.myProfile.tags) {
				this.setState({tags : nextProps.profile.myProfile.tags});
			}
		}
	}

	updateProfile () {
		let data = {
		  "sid": this.props.profile.myProfile.sid,
		  "name": this.refs.name.value,
		  "city": this.refs.city.value,
		  "place": {'jal' : 'city'},
		  "websiteURL": this.refs.website.value,
		  "email": this.refs.email.value,
		  "tags": [this.refs.tags.value],
		  "description": this.refs.description.value
		};
		this.props.updateProfile(data);
	}

	handleTagsChanged (e) {
		if(e.keyCode == 32 && e.target.value.replace(/\s+/, "").length > 0) {
			let tagsNew = this.state.tags;
			tagsNew.push(e.target.value);
			this.setState({
				tags : tagsNew
			});
			e.target.value = '';	
		}
	}

	removeTag (index) {
		let tagsNew = this.state.tags;
		tagsNew.splice(index, 1);
		this.setState({
			tags : tagsNew
		});
	}

	render () {
		const { myProfile } = this.props.profile;
		return <div>
			{myProfile ?
			<div className={cx(styles['outer'])}>
				<HeroTitle title='Edit Profile'/>
				<div className={cx(styles['inner'])}>
					<form className={cx(styles['form'])}>
						<div className={cx(styles['container'])}>
							<div className={cx(styles['label'])}>Name :</div>
							<input ref='name' placeholder='Your Name' defaultValue={myProfile.name}/>
						</div>
						<div className={cx(styles['container'])}>
							<div className={cx(styles['label'])}>City :</div>
							<input ref='city' placeholder='City' defaultValue={myProfile.city}/>
						</div>
						<div className={cx(styles['container'])}>
							<div className={cx(styles['label'])}>Website :</div>
							<input ref='website' placeholder='Enter a url to your website' defaultValue={myProfile.websiteURL}/>
						</div>
						<div className={cx(styles['container'])}>
							<div className={cx(styles['label'])}>Email :</div>
							<input ref='email' placeholder='Enter your email' defaultValue={myProfile.email}/>
						</div>
						<div className={cx(styles['container'])}>
							<div className={cx(styles['label'])}>Description :</div>
							<textarea ref='description' placeholder='Description' defaultValue={myProfile.description}/>
						</div>
						<div className={cx(styles['container'])}>
							<div className={cx(styles['label'])}>Tags :</div>
						<div className={cx(styles['tags-container'], 'clearfix')}>
							<div className={cx(styles['tags-group'])}>
								{this.state.tags.map((tag, index) =>
									<span key={index} onClick={this.removeTag.bind(this, index)}><Tag text={tag} showRemove={true}/></span>
								)}
							</div>
							<input onKeyDown={this.handleTagsChanged.bind(this)} className={cx(styles['tags-input'])}/>
						</div>
						</div>
					</form>				
					<ButtonPrimary title='Update' onClick={this.updateProfile.bind(this)} className={cx(styles['button'])} />
				</div>
			</div>
			: null }
		</div>
	}
}

function mapStateToProps (state) {
	return {
		userState : state.userState,
		profile : state.profile
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		updateProfile : updateProfileAction,
		getMyProfile : getMyProfileAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
