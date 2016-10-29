import React, { Component } from 'react';
import styles from './accountsDropdown.css';
import cx from 'classnames';
import { connect  } from 'react-redux';
import {bindActionCreators} from 'redux';
import { logoutAction } from '../../actions/userStateActions.js';

class AccountsDropdown extends Component {

	constructor (props) {
		super(props);
		this.onBlurHandler = this.onBlurHandler.bind(this);
	}	

	onBlurHandler () {
		this.props.onBlur();
	}

	render () {
		return <div>
			<div onClick={this.onBlurHandler} className='overlay'/> 
			<div className={cx(styles['outer'])}>
				<div onClick={this.props.logout} className={cx(styles['option'])}>Logout</div>			
			</div>
		</div>
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		logout : logoutAction
	}, dispatch);
}
export default connect(null, mapDispatchToProps)(AccountsDropdown);

