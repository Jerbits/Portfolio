import React from "react";
import FA from "react-fontawesome";

import Navigation from "./elements/Navigation";
import Slider from "./elements/Slider";
import Sky from "./elements/Sky";
import Footer from "./elements/Footer";

class AboutMe extends React.Component {
	render() {
		return (
			<div id="wrapper" className="noon">
				<Navigation />
				<Sky stateofday="noon" />
				<section className="body1bg">
	        <div className="seasonbox s2">
	            <div className="header">
	                <h1>ABOUT ME</h1>
	            </div>
	        </div>
	    </section>
			</div>
		);
	}
}
export default AboutMe;
