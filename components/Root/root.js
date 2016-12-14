import React, { Component } from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import HeaderMinimal from '../HeaderMinimal/headerMinimal';

class Root extends Component {	

	constructor (props) {
		super(props);
	}

	render () {
		return <div>
			<Header/>
			{this.props.children}
			<Footer/>
		</div>
	}
}

export default Root;
