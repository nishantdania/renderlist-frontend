import React, {Component} from 'react'
import styles from './about.css';
import cx from 'classnames';
import {Link} from 'react-router';

import HeroTitle from '../HeroTitle/heroTitle';

class About extends Component {
	
	render () {
		return <div className={cx(styles[''])}>
			<HeroTitle title='About'/>
			<div className={cx(styles['content'])}>
				<div>Listing showreels from around the world</div>
				<div>
					RenderList aims to find the showreels of the  best animators, motion graphics artists, cinematographers and film makers
					 to make it easier for people to find them. We feel that a showreel perfectly defines the work of an artist.
					
				</div>	
			</div>
			<div className={cx(styles['social'])}>
				<div>Connect with us</div>
				<div>Facebook</div>
				<div>Twitter</div>
			</div>
		</div>
	}
}

export default About;
