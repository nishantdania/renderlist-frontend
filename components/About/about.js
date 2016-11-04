import React, {Component} from 'react'
import styles from './about.css';
import cx from 'classnames';
import {Link} from 'react-router';

class About extends Component {
	
	render () {
		return <div className={cx(styles['outer'])}>
			<div className={cx(styles['title'])}>
				What is RenderList ?	
			</div>
			<div className={cx(styles['subtitle'])}>
				<p>
					We are trying to curate a list of all the film and animation studios and solo artists from across the world in one place.
					We will soon launch the homepage featuring the showreels of artists and studios from across the world.
				</p>
				<p>
					RenderList aims to help people find the right studio for their work, be it making ad films, music videos, animated films or VFX.
				</p>
				<p>
					This is a pre-launch registration which would make sure that your work goes out to the world as soon as the main launch happens.
				</p>
				<p>
					For any queries, please send a message through the <Link to='/contact'>contact page</Link>.
				</p>
			</div>
		</div>
	}
}

export default About;
