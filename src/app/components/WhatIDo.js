import React from "react";
import FA from "react-fontawesome";

import Navigation from "./elements/Navigation";
import Slider from "./elements/Slider";
import Sky from "./elements/Sky";
import Footer from "./elements/Footer";

class WhatIDo extends React.Component {
	render() {
		return (
			<div id="wrapper" className="dusk">
				<Navigation />
				<Sky stateofday="dusk" />
				<section className="body1bg">
	        <div className="seasonbox s2">
	            <div className="header">
	                <h1>WHAT I DO</h1>

	            </div>

	        </div>
	        
	    	</section>
				<Footer />
			</div>
		);
	}
}
export default WhatIDo;
