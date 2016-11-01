import React, { Component } from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import HeaderMinimal from '../HeaderMinimal/headerMinimal';

class Root extends Component {	
	render () {
		return <div>
			<HeaderMinimal/>
			{this.props.children}
		</div>
	}
}

export default Root;
