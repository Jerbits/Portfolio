import React from "react";
import FA from "react-fontawesome";

import Navigation from "./elements/Navigation";
import Slider from "./elements/Slider";
import Sky from "./elements/Sky";
import Footer from "./elements/Footer";

class Home extends React.Component {
	render() {
		return (
			<div id="wrapper" className="night">
				<Navigation />
				<Sky stateofday="night" />
				<section className="body1bg">
					<div className="seasonbox stars s1">
						<Slider timeout={6000} speed={1000} />
						<div className="commentbox">
							<h2>
								Hi there, I'm <strong>Jerome Vercide</strong>. I’m a{" "}
								<strong>
									<span>Frontend Developer</span>
								</strong>.
							</h2>
							<p>
								This is a very old site I made back in 2013. For the sake of
								showcasing my recent work, I've resurrected this site and
								applied a few updates.
							</p>
							<p>
								I recently moved to Canada on November and I am currently
								available to do full-time or part-time work.
							</p>
							<p>
								I have 10 years of frontend development experience. I am
								seasoned in all facets of web development from design, frontend,
								backend, and deployment to server and DNS maintenance.
							</p>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default Home;
