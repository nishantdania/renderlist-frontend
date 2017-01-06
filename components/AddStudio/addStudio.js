import React, { Component } from 'react';
import styles from './addStudio.css';
import cx from 'classnames';
import ButtonRound from '../ButtonRound/buttonRound';
import { fetchPlacesAction } from '../../actions/googlePlacesActions.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';
import { addStudioAction, uploadShowreelAction } from '../../actions/addStudioActions';
import { INIT, LOADING, SUCCESS, ERROR, isCompleted, isSuccess, isLoading } from '../../utils/asyncStatusHelper';
import ButtonPrimary from '../ButtonPrimary/buttonPrimary';
import Tag from '../Tag/tag';
import LoginContainer from '../LoginContainer/loginContainer';

class AddStudio extends Component {
	
	constructor (props) {
		super(props);
		if(!this.props.userState.isLoggedIn) this.props.fetchUserState();
		this.state = {
			isStudio : true,
			showError : false,
			message : '',
			showCityList : false,
			place_id : '',
			showMessage : false,
			listIndex : 0,
			fileName : '',
			tags : ['showreel']
		};
		this.onSubmitClicked = this.onSubmitClicked.bind(this);
	}

	validateData (data) {
		for (var key in data) {
			if (data[key].length === 0 && key != 'showreelURL' && key != 'tags') {
				this.showError('Error : No field should be empty');
				return false;
			}
		} 	
		return true;
	}

	showError (message) {
		this.setState({
			showError : true,
			message : message
		});
	}

	onSubmitClicked () {
		this.setState({showError : false});
		var data = {};
		data.isStudio = this.state.isStudio;
		data.name = this.refs.name.value;
		data.websiteURL = this.refs.websiteURL.value;
		data.email  = this.refs.email.value;
		data.city = this.state.place_id;
		data.place = this.state.place;
		data.showreelURL = this.refs.showreelURL.value;
		data.description = this.refs.description.value;
		data.tags = this.state.tags;
		if(this.validateData(data)){
			this.props.addStudio(data);	
			this.setState({
				showMessage : true
			});
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

	handleRadioChange (value) {
		this.setState({
			isStudio : value
		});
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

	addFields () {
		return <div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					You are a :
				</div>
				<div className={cx(styles['radio-outer'])}>
					<div className={cx(styles['radio-container'])}>
						<input type="radio" ref='name' checked={this.state.isStudio} onChange={this.handleRadioChange.bind(this, true)}/>
						<div className={cx(styles['radio-label'])}>Studio</div>
					</div>
					<div className={cx(styles['radio-container'])}>
						<input type="radio" ref='name' checked={!this.state.isStudio} onChange={this.handleRadioChange.bind(this, false)}/>
						<div className={cx(styles['radio-label'])}>Individual</div>
					</div>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				{this.state.isStudio ? <div><div className={cx(styles['title-input'])}>
					Studio Name :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='name' placeholder='Enter the name of your studio'/>
				</div></div>
				: <div><div className={cx(styles['title-input'])}>
					Full Name :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='name' placeholder='Enter your full name'/>
				</div></div>}
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					City :
				</div>
				<div className={cx(styles['inputContainer'], styles['cityInputContainer'])}>
					<input ref='city' 
						onKeyDown={this.handleKeyDown.bind(this)} 
						onChange={this.onCityChanged.bind(this)} 
						placeholder='Enter your city'/>
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
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Email :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='email' placeholder='johndoe@gmail.com' defaultValue={this.props.userState.user.email}/>
				</div>
			</div>

			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Website URL :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='websiteURL' placeholder='http://www.johndoestudios.com'/>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Showreel URL(optional) : 
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='showreelURL' placeholder='Enter a Vimeo link'/>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Description :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<textarea ref='description' placeholder='Give a clear description of your work'></textarea>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Tags (Press spacebar after typing to add the tag) :
				</div>
				<div className={cx(styles['tags-container'], 'clearfix')}>
					<div className={cx(styles['tags-group'])}>
						{this.state.tags.map((tag, index) =>
							<span key={index} onClick={this.removeTag.bind(this, index)}><Tag text={tag} showRemove={true}/></span>
						)}
						</div>
					<input onKeyDown={this.handleTagsChanged.bind(this)} className={cx(styles['tags-input'])}/>
				</div>
			</div>
		</div>
	}

	showForm () {
		return <div className={cx(styles['outer'])}>
			{!this.props.userState.user.hasStudio ? <div>
				<div className={cx(styles['title'])}>Just one more step !</div>
				{this.addFields()}
				{!this.state.showMessage ? <ButtonPrimary onClick={this.onSubmitClicked} title='Submit' className={cx(styles['button'])}/> 
				: <ButtonPrimary title='Submitting...' className={cx(styles['button'])}/>
				}
				{this.state.showError ?	<div className={cx(styles['error'])}>{this.state.message}</div> : null}
			</div>
		: <div className={cx(styles['static'])}>
			Thank you for adding your showreel. We will notify you when your profile goes live. You would be able to edit your profile then.
		</div>}
		</div>
	}
	
	uploadFile () {
		var file = this.refs.upload.files[0];
		if(file == undefined) return;
		this.setState({
			fileName : file.name
		});
		var formData = new FormData(this.refs.uploadForm);
		this.props.uploadShowreel(formData);
	}

	renderUploadForm () {
		const { uploadStatus } = this.props.addShowreel;
		return <div className={cx(styles['part-1-outer'])}>
			<div className={cx(styles['part-1-inner'])}>
				<div className={cx(styles['part-1-title'])}>
					You are just 2 steps away from adding your showreel to RenderList.
					<span>Lets start by uploading your showreel.</span>
					{uploadStatus != LOADING ? <span>Choose your showreel and click on upload.</span> : null}
				</div>
				{uploadStatus == INIT ? <form className={cx(styles['part-1-form'])} onSubmit={this.uploadFile.bind(this)} ref='uploadForm' encType="multipart/form-data">
					<input className={cx(styles['part-1-input'])} ref='upload' type='file' name='showreelFile' accept="video/mp4,video/x-m4v,video/*"/>
					<ButtonPrimary className={cx(styles['part-1-button'])} title='Upload' onClick={this.uploadFile.bind(this)}/>
				</form> : null}
				{uploadStatus == LOADING ? <div className={cx(styles['loader-outer'])}>
					<div className={cx(styles['filename'])}>{this.state.fileName}</div>
					<span></span>
					<div>Uploading the file may take a few minutes. You will be redirected to the next step once this is done.</div>
				</div> : null}
			</div>
		</div>
	}

	renderStaticMessage () {
		return <div className={cx(styles['static'])}>
			<div>Thank you for adding  your showreel.</div><div>In case you don't see your showreel on RenderList, its because your showreel is in review. This usually takes
			24 hrs.</div>
			<div>You will be notified once the review is done and your showreel is added.</div>
		</div>
	}

	render () {
		const { uploadStatus } = this.props.addShowreel;
		const { isLoggedIn, user } = this.props.userState;
		return <div>
			{uploadStatus != SUCCESS && isLoggedIn && user && !user.hasStudio ? this.renderUploadForm() : null}
			{uploadStatus == SUCCESS && isLoggedIn && user && !user.hasStudio? this.showForm() : null}
			{!isLoggedIn && !isLoading(this.props.userState) ? <LoginContainer closeToHome={true}/> : null}
			{isLoggedIn && user && user.hasStudio ? this.renderStaticMessage() : <div className={cx(styles['static'])}>Loading...</div>}
		</div>
	}

}

function mapStateToProps (state) {
	return {
		userState : state.userState,
		googlePlaces : state.googlePlaces,
		addShowreel : state.addShowreel
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchPlaces : fetchPlacesAction,
		addStudio : addStudioAction,
		fetchUserState : fetchUserStateAction,
		uploadShowreel : uploadShowreelAction
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudio);

