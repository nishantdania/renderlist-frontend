import React from 'react'
import styles from './buttonRound.css';

function ButtonRound (props) {
	return <div className={styles['outer']}>
		<div>
			{props.title}
		</div>
	</div>
}

export default ButtonRound;
