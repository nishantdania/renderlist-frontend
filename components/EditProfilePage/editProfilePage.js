import React, { Component } from 'react';
import styles from './editProfilePage.css';
import cx from 'classnames';
import { connect  } from 'react-redux';
import { Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {updateProfileAction, getMyProfileAction} from '../../actions/profileActions';
import ButtonPrimary from '../ButtonPrimary/buttonPrimary';

class EditProfilePage extends Component {
	constructor (props) {
		super(props);
		if (this.props.userState.isLoggedIn){
			let username = this.props.userState.user.username;		
			this.props.getMyProfile(username);
		}
	}

	componentWillReceiveProps (nextProps) {

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

	render () {
		const { myProfile } = this.props.profile;
		return <div>
			{myProfile ?
			<div>
				<form>
					<div>
						<div>Name :</div>
						<input ref='name' placeholder='Your Name' defaultValue={myProfile.name}/>
					</div>
					<div>
						<div>City :</div>
						<input ref='city' placeholder='City' defaultValue={myProfile.city}/>
					</div>
					<div>
						<div>Description :</div>
						<input ref='description' placeholder='Description' defaultValue={myProfile.description}/>
					</div>
					<div>
						<div>Website :</div>
						<input ref='website' placeholder='Enter a url to your website' defaultValue={myProfile.websiteURL}/>
					</div>
					<div>
						<div>Email :</div>
						<input ref='email' placeholder='Enter your email' defaultValue={myProfile.email}/>
					</div>
					<div>
						<div>Tags :</div>
						<input ref='tags' placeholder='Tags' defaultValue={myProfile.tags}/>
					</div>
				</form>				
				<ButtonPrimary title='Update' onClick={this.updateProfile.bind(this)}/>
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
