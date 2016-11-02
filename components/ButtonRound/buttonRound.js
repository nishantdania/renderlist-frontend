import React from 'react'
import styles from './buttonRound.css';
import cx from 'classnames';

function ButtonRound (props) {
	return <div className={cx(styles['outer'], props.className)}>
		<div>
			{props.title}
		</div>
	</div>
}

export default ButtonRound;
