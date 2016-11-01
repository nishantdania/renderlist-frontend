import React, { Component } from 'react';
import styles from './addStudio.css';
import cx from 'classnames';
import Input from '../Input/input';
import ButtonRound from '../ButtonRound/buttonRound';

class AddStudio extends Component {

	render () {
		return <div>
			<div>
				Add Your Studio
				<Input title='Studio Name' placeholder='Enter your studio name' />
				<Input title='Website URL' placeholder='http://www.johndoestudios.com'/>
				<Input title='Description' placeholder='Enter your studio name'/>
				<Input title='Showreel URL' placeholder='Enter your studio name'/>
				<Input title='Location' placeholder='Enter your studio name'/>
				<ButtonRound title='Submit'/>
			</div>
		</div>
	}

}

export default AddStudio;

