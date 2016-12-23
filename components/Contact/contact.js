import React, { Component } from 'react';
import styles from './contact.css';
import cx from 'classnames';
import ButtonRound from '../ButtonRound/buttonRound';
import { sendMessageAction } from '../../actions/contactActions.js';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HeroTitle from '../HeroTitle/heroTitle';

class Contact extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showForm : true,
			showError : false,
			message : ''
		};
	}

	onSubmitClicked () {
		var data = {};
		data.name = this.refs.name.value;	
		data.email = this.refs.email.value;
		data.message = this.refs.message.value;
		if(this.validateData(data)) {
			this.props.sendMessage(data);
			this.setState({ showForm : false });
		}
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
	
	render () {
		return <div> 
			<HeroTitle title='Contact'/>
			<div className={cx(styles['outer'])}>
			<div className={cx(styles['heading'])}>Got any questions?<span> Fill up the form below or mail us at hello@renderlist.com</span></div>
			{this.state.showForm ? <div>
			{this.state.showError ?	<div className={cx(styles['error'])}>{this.state.message}</div> : null}
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Name :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='name' placeholder='Enter your name'/>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Email :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<input ref='email' placeholder='Enter your email id'/>
				</div>
			</div>
			<div className={cx(styles['outer-input'])}>
				<div className={cx(styles['title-input'])}>
					Message :
				</div>
				<div className={cx(styles['inputContainer'])}>
					<textarea ref='message' placeholder='Write your message here'></textarea>
				</div>
			</div>
			<ButtonRound onClick={this.onSubmitClicked.bind(this)} title='Submit' className={cx(styles['button'])}/> 
		</div>
		: <div>
			Your message was successfully sent. We'll get back to you soon.
		</div>}
		</div>
		</div>
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		sendMessage : sendMessageAction
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(Contact);

