import React, {Component} from 'react'
import styles from './buttonPrimary.css';
import cx from 'classnames';

class ButtonPrimary extends Component {

	constructor (props) {
		super(props);
	}

	onClick () {
		this.props.onClick();
	}
	
	render () {
		return <div onClick={this.onClick.bind(this)} className={cx(styles['outer'], this.props.className)}>
			<div>
				{this.props.title}
			</div>
		</div>
	}
}

export default ButtonPrimary;
