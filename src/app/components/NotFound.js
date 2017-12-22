import React from 'react';
import Navigation from './elements/Navigation';
import Body from './elements/Body';
import Footer from './elements/Footer';
import FA from 'react-fontawesome';
import sample from 'images/index';

class NotFound extends React.Component{
	render(){
		return(
			<div id="wrapper">
				<Navigation />
				<div className="container">
		      <div className="starter-template">
						<div>
						<br />
						<br />
						<br />
						<br /><br /><br />
							<h1 style={{textAlign:"center"}}><FA name="rocket" size="2x" spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}></FA> <br />Sorry, page not found!</h1>
						</div>
		      </div>
		    </div>
			</div>
		)
	}
}
export default NotFound;