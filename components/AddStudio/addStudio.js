import React, { Component } from 'react';
import styles from './addStudio.css';
import cx from 'classnames';
import ButtonRound from '../ButtonRound/buttonRound';
import { fetchPlacesAction } from '../../actions/googlePlacesActions.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchUserStateAction } from '../../actions/userStateActions.js';
import { addStudioAction } from '../../actions/addStudioActions';
import { isCompleted } from '../../utils/asyncStatusHelper';

class AddStudio extends Component {
	
	constructor (props) {
		super(props);
		if(!this.props.userState.isLoggedIn) this.props.fetchUserState();
		this.state = {
			showError : false,
			message : '',
			showCityList : false,
			place_id : '',
			showMessage : false,
			listIndex : 0
		};
		this.onSubmitClicked = this.onSubmitClicked.bind(this);
	}

	validateData (data) {
		for (var key in data) {
			if (data[key].length === 0) {
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
		data.studioName = this.refs.studioName.value;
		data.websiteURL = this.refs.websiteURL.value;
		data.city = this.state.place_id;
		data.showreelURL = this.refs.showreelURL.value;
		data.description = this.refs.description.value;
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
			place_id : value.place_id		
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

	addFields () {
		return <div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Studio Name :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='studioName' placeholder='Enter your studio name'/>
				</div>
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
					Website URL :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='websiteURL' placeholder='http://www.johndoestudios.com'/>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Showreel URL :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='showreelURL' placeholder='Enter a Youtube or Vimeo link'/>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Description :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<textarea ref='description' placeholder='Give a clear description of your studio'></textarea>
				</div>
			</div>
		</div>

	}

	showForm () {
		return <div className={cx(styles['outer'])}>
			{!this.props.userState.user.hasStudio ? <div>
				<div className={cx(styles['title'])}>Add Your Studio</div>
				{this.state.showError ?	<div className={cx(styles['error'])}>{this.state.message}</div> : null}
				{this.addFields()}
				{!this.state.showMessage ? <ButtonRound onClick={this.onSubmitClicked} title='Submit' className={cx(styles['button'])}/> 
				: <ButtonRound title='Submitting...' className={cx(styles['button'])}/>
				}
			</div>
		: <div>
			Thank you for adding your studio. We will notify you when your profile goes live. You would be able to edit your profile then.
		</div>}
		</div>
	}

	render () {
		return <div>
			{isCompleted(this.props.userState) ? this.showForm() : null} 
		</div>
	}

}

function mapStateToProps (state) {
	return {
		userState : state.userState,
		googlePlaces : state.googlePlaces,
		addStudio : state.addStudio
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		fetchPlaces : fetchPlacesAction,
		addStudio : addStudioAction,
		fetchUserState : fetchUserStateAction
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudio);

