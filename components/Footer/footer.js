import React, { Component } from 'react'
import styles from './footer.css';
import cx from 'classnames';
import { Link } from 'react-router';

class Footer extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['main'])}>
			<div className={cx('row')}>
				<div className={cx('col-6', styles['section-1'])}>
					<div className={cx(styles['logo-container'])}>
						<Link to='/'>
							<img className={cx(styles['logo'])} src='assets/logo-32.png'/>
							<div className={cx(styles['logo-text'])}>RenderList</div>
						</Link>
					</div>
					<div className={cx(styles['l1'])}>
						Finest showreels from around the globe.
					</div>
					<div className={cx(styles['l2'])}>
						A platform to discover and hire the best artists.
						Add your showreel to RenderList and let people see your creative work.
					</div>
				</div>
				<div className={cx('col-3', styles['links'], styles['section'])}>
					<ul>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/contact'>Contact Us</Link></li>
						<li><Link to='/addStudio'>Add Showreel</Link></li>
						<li><Link to='/jobs'>Jobs</Link></li>
					</ul>
				</div> 
				<div className={cx('col-3', styles['links'], styles['section'])}>
					<ul>
						<li><a href='https://www.facebook.com/renderlist' target='_blank'>Facebook</a></li>
						<li><a href='mailto:hello@renderlist.com' target='_blank'>hello@renderlist.com</a></li>
					</ul>
				</div>
			</div>
		</div>
	}
}

export default Footer;
