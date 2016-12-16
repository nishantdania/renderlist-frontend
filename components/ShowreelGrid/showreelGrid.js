import React, { Component } from 'react'
import cx from 'classnames';
import styles from './showreelGrid.css';

import ShowreelGridUnit from '../ShowreelGridUnit/showreelGridUnit';

class ShowreelGrid extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div>
			<div className={cx(styles['grid-outer'])}>
				<div className={cx('clearfix', styles['grid-inner'])}>
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>			
					<ShowreelGridUnit/>
				</div>
			</div>			
		</div>
	}
}

export default ShowreelGrid;

