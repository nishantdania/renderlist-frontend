import React, { Component } from 'react'
import cx from 'classnames';
import styles from './root.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';

class Root extends Component {	

	constructor (props) {
		super(props);
	}

	render () {
		return <div className={cx(styles['outer'])}>
			<Header/>
			{this.props.children}
			<Footer/>
		</div>
	}
}

export default Root;
