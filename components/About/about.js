import React, {Component} from 'react'
import styles from './about.css';
import cx from 'classnames';
import {Link} from 'react-router';

import HeroTitle from '../HeroTitle/heroTitle';

class About extends Component {

	componentDidMount () {
		document.title = 'About - Renderlist';
	}
	
	render () {
		return <div>
			<HeroTitle title='About Us'/>
			<div className={cx(styles['outer'])}>

				<div className={cx(styles['content'])}>
					<span>
							Finest showreels from around the globe.
					</span>
				</div>
				<div className={cx(styles['content'])}>
					<div>What is RenderList ?</div>
					<div>
						RenderList is an online platform which showcases the best showreels of leading artists from around the world. 
						We aim to become the biggest resource for people and studios to discover top creative work and hire the best artists. 
					</div>	
				</div>
				<div className={cx(styles['content'])}>
					<div>
						Whether you are an animator, vfx artist, film-maker, cinematographer, a showreel is the best way to describe your work.
						RenderList helps you promote your work and get your next job easily.
					</div>
				</div>
				<div className={cx(styles['content'])}>
					<div>
						Got any questions for us ? Send us a message through the <Link to='/contact'>contact page.</Link>
					</div>
				</div>
				<div className={cx(styles['content'])}>
					<div>
						Or connect with us on <a href='http://www.facebook.com/renderlist' target='_blank'>facebook</a>.	
					</div>
				</div>
				<div className={cx(styles['content'])}>
					<div>
						Got a showreel yourself ? <Link to='/addStudio'>Add it to RenderList</Link> and be a part of the RenderList community.
					</div>
				</div>
			</div>
		</div>
	}
}

export default About;
