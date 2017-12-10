import React from 'react';
import Navigation from './Navigation';
import Body from './Body';
import Footer from './Footer';

class Wrapper extends React.Component{
	render(){
		return(
			<div id="wrapper">
				<Navigation />
				<Body />
				<Footer />
			</div>
		)
	}
}
export default Wrapper;