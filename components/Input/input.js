import React, { Component } from 'react';
import styles from './input.css';
import cx from 'classnames';

class Input extends Component {
	
	render () {
		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['title'])}>
				{this.props.title}
			</div>
			<div className={cx(styles['inputContainer'])}>
				<input placeholder={this.props.placeholder}/>
			</div>
		</div>
	}
}

export default Input;
