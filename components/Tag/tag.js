import React, {Component} from 'react'
import styles from './tag.css';
import cx from 'classnames';

class Tag extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx('clearfix', styles['outer'])}>
			<div className={cx(styles['text'])}>{this.props.text}</div>
			{this.props.showRemove ? <div className={cx(styles['remove'])}>
				x
			</div> 
			: null}
		</div>
	}
}

export default Tag;
