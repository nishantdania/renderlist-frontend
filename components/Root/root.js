import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import HeaderMinimal from '../HeaderMinimal/headerMinimal';

export default React.createClass({
	render() {
		return <div>
			<HeaderMinimal/>
			{this.props.children}
		</div>
	}
});
