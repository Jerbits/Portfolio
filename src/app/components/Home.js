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
				<section className="body1bg stars">
					<div className="seasonbox s1">
						<div className="container">
							<Slider timeout={6000} speed={1000} />
							<div className="row">
								<div className="col-md-12">
									<div className="commentbox">
										<h2>
											Hi there, I'm <strong>Jerome Vercide</strong>. I’m a{" "}
											<strong>
												<span>Frontend Developer</span>
											</strong>.
										</h2>
										<p>
											After years of working for companies and clients, I have
											finally found time to update my portfolio website.
										</p>
										<p>
											I have been working as a frontend developer for 10 years.
											Working for companies that are based in Philippines but
											have clients in Australia, US and the UK. Although I focus
											more on client side applications, I am also well
											experienced with design, backend development, and
											deployment.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default Home;
