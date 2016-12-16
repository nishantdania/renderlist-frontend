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
			<ShowreelGridUnit/>			
		</div>
	}
}

export default ShowreelGrid;

