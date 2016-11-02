import React, { Component } from 'react';
import styles from './addStudio.css';
import cx from 'classnames';
import Input from '../Input/input';
import ButtonRound from '../ButtonRound/buttonRound';
import TextArea from '../TextArea/textArea';

class AddStudio extends Component {

	render () {
		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['title'])}>Add Your Studio</div>
			<Input title='Studio Name' placeholder='Enter your studio name' />
			<Input title='Website URL' placeholder='http://www.johndoestudios.com'/>
			<TextArea title='Description' placeholder='Write something about your studio'/>
			<Input title='Showreel URL' placeholder='Enter a Youtube or Vimeo link'/>
			<Input title='City' placeholder='Enter your city'/>
			<ButtonRound title='Submit' className={cx(styles['button'])}/>
		</div>
	}

}

export default AddStudio;

