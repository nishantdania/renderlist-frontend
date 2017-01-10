import React, { Component } from 'react';
import styles from './editProfilePage.css';
import cx from 'classnames';
import { connect  } from 'react-redux';
import { Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {updateProfileAction, getMyProfileAction} from '../../actions/profileActions';
import { fetchPlacesAction } from '../../actions/googlePlacesActions.js';
import { INIT, LOADING, SUCCESS, ERROR, isCompleted, isSuccess, isLoading } from '../../utils/asyncStatusHelper';
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
				tags : [],
				listIndex : 0,
				showCityList : false,
				place_id : ''
			};
		}
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.profile.myProfile) {
			if (nextProps.profile.myProfile.tags) {
				this.setState({
					tags : nextProps.profile.myProfile.tags,
					place_id : nextProps.profile.myProfile.city,
					place : nextProps.profile.myProfile.place	
				});
			}
		}
	}

	updateProfile () {
		let data = {
			"sid": this.props.profile.myProfile.sid,
			"name": this.refs.name.value,
			"city" : this.state.place_id,
			"place" : this.state.place,
			"websiteURL": this.refs.website.value,
			"email": this.refs.email.value,
			"tags": this.state.tags,
			"description": this.refs.description.value
		};
		this.props.updateProfile(data);
	}

	handleTagsChanged (e) {
		var code = e.target.value.slice(-1);
		if(code == ' ' && e.target.value.replace(/\s+/, "").length > 0) {
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

	handleKeyDown (e) {
		if(this.refs.cityList) {
			switch(e.keyCode) {
				case 38:
				case 40:
					if (this.refs.cityList.children.length === 0) return;
					this.refs.cityList.children[0].focus();
					this.setState({listIndex : 0});
					return;
				default :
					return;
			}
		}
	}

	onCityChanged (e) {
		if (!this.state.showCityList) {
			this.setState({
				showCityList : true
			});
		}
		this.props.fetchPlaces(e.target.value);
	}
	
	onCityClick (value) {
		this.refs.city.value = value.description;
		this.setState({
			showCityList : false,
			place_id : value.description,
			place : value		
		});
	}

	handleListItemKeyDown (value, e) {
		switch(e.keyCode) {
			case 38 :
				e.preventDefault();
				var newIndex = Math.max(this.state.listIndex - 1, 0);
				this.refs.cityList.children[newIndex].focus();
				this.setState({listIndex : newIndex});
				return;
			case 40 :
				e.preventDefault();
				var newIndex = Math.min(this.state.listIndex + 1, this.refs.cityList.children.length - 1);
				this.refs.cityList.children[newIndex].focus();
				this.setState({listIndex : newIndex});
				return;
			case 13 :
				e.preventDefault();
				this.onCityClick(value);
				return;
			default :
				this.refs.city.focus();
		}
	}

	showForm () {
		const { myProfile } = this.props.profile;
		return <div className={cx(styles['outer'])}>
		<HeroTitle title='Edit Profile'/>
		<div className={cx(styles['inner'])}>
			<form className={cx(styles['form'])}>
				<div className={cx(styles['container'])}>
					<div className={cx(styles['label'])}>Name :</div>
					<input ref='name' placeholder='Your Name' defaultValue={myProfile.name}/>
				</div>
				<div className={cx(styles['container'])}>
					<div className={cx(styles['label'])}>City :</div>
					<div className={cx(styles['inputContainer'], styles['cityInputContainer'])}>
						<input ref='city' 
							onKeyDown={this.handleKeyDown.bind(this)} 
							onChange={this.onCityChanged.bind(this)} 
							placeholder='Enter your city' defaultValue={myProfile.city}/>
						{this.state.showCityList ? <div className={cx(styles['cityDropdown'])}>
							<ul ref='cityList' tabIndex='0' className={cx(styles['cityDropdownList'])}>
								{this.props.googlePlaces.places && this.props.googlePlaces.places.map(function(value, idx) {
									return <li tabIndex="0" onKeyDown={this.handleListItemKeyDown.bind(this, value)} 
											onClick={this.onCityClick.bind(this, value)} key={idx}>{value.description}</li>;
								}, this)}
							</ul>
						</div> : null}
					</div>
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
					<input onChange={this.handleTagsChanged.bind(this)} className={cx(styles['tags-input'])}/>
				</div>
				</div>
			</form>				
			{!isLoading(this.props.profile) ? <ButtonPrimary title='Update' onClick={this.updateProfile.bind(this)} className={cx(styles['button'])} />
			: null }
			{isLoading(this.props.profile) ? <ButtonPrimary title='Updating...' className={cx(styles['button'])}/> : null }
		</div>
	</div>
	}

	render () {
		const { myProfile } = this.props.profile;
		return <div>
			{myProfile ? this.showForm() : null }
			{!myProfile ? <div className={cx(styles['static'])}>Loading...</div> : null}
		</div>
	}
}

function mapStateToProps (state) {
	return {
		userState : state.userState,
		profile : state.profile,
		googlePlaces : state.googlePlaces
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchPlaces : fetchPlacesAction,
		updateProfile : updateProfileAction,
		getMyProfile : getMyProfileAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
