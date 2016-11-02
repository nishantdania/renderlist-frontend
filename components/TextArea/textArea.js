import React, { Component } from 'react';
import styles from './textArea.css';
import cx from 'classnames';

class TextArea extends Component {
	
	render () {
		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['title'])}>
				{this.props.title} : 
			</div>
			<div className={cx(styles['inputContainer'])}>
				<textarea placeholder={this.props.placeholder}></textarea>
			</div>
		</div>
	}
}

export default TextArea;
