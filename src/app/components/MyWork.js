import React from "react";
import FA from "react-fontawesome";

import Navigation from "./elements/Navigation";
import Slider from "./elements/Slider";
import Sky from "./elements/Sky";
import Projects from "./elements/Projects";

class MyWork extends React.Component {
	render() {
		return (
			<div id="wrapper" className="dawn">
				<Navigation />
				<Sky stateofday="dawn" />
				<section className="body1bg">
	        <div className="seasonbox s2">
	            <div className="header">
	                <h1>MY WORK</h1>
	                <br />
	            </div>
	            <Projects />
	        </div>
	    </section>
			</div>
		);
	}
}
export default MyWork;
