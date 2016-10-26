import React from 'react'

export default React.createClass({
	render() {
	let style = {
		"maxWidth" : "200px",
		"width" : "100%",
		"marginTop" : "8px"
	}
		return <div>
			<a href='http://localhost:3000/api/auth/google?redirect=http://localhost:8080/redirect'>
				<img src='../assets/google_signin.png' style={style}></img>
			</a>
			<a href='http://localhost:3000/api/auth/facebook?redirect=http://localhost:8080/redirect'>
				<img src='../assets/fb_signin.png' style={style}></img>
			</a>

		</div>

	}
});
