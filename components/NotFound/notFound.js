import React from 'react'
import styles from './notFound.css';
import cx from 'classnames';

export default React.createClass({
	render() {
		return <div className={cx(styles['outer'])}>Sorry ! The page you are looking for does not exist.</div>
	}
});
