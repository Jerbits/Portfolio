import React from "react";
import FontAwesome from "react-fontawesome";

import Navigation from "./elements/Navigation";
import Slider from "./elements/Slider";
import Sky from "./elements/Sky";

import face from "images/img_aboutmeface";

class AboutMe extends React.Component {
	render() {
		return (
			<div id="wrapper" className="dusk">
				<Navigation />
				<Sky stateofday="dusk" />
				<section className="body1bg">
					<div className="seasonbox s2">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="header">
										<h1>ABOUT ME</h1>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="commentbox noimg nomar">
										<div className="row">
											<div className="col-sm-3">
												<div className="sidebar">
													<p className="profilephoto">
														<img src={face} alt="my face" />
													</p>
													<h2>Rome</h2>
													<p>
														<FontAwesome name="home" /><span> Brampton, Ontario</span>
													</p>
													<p>
														<FontAwesome name="envelope" /><span> <a href="mailto:jerome8vercide@yahoo.com">Get in touch!</a> </span>
													</p>
													<p>
														<a  target="blank" href="https://github.com/Jerbits">
															<FontAwesome name="github" /><span> Github</span>
														</a>
													</p>
													<p>
														<a target="blank" href="https://www.linkedin.com/in/jerome-vercide-61b7b1153/">
															<FontAwesome name="linkedin" /><span> Linkedin</span>
														</a>
													</p>
													<p>
														<FontAwesome name="graduation-cap" /><span> Associate's degree in Computer Science</span>
													</p>
												</div>
											</div>
											<div className="col-sm-9">
												<div className="resume">
													<div>
														<h2>
															<strong>
																<span className="highlight">Senior Frontend Developer</span>
															</strong>
														</h2>
														<h3>
															Kodenta Inc (Dec 2013 - Feb 2017) <br />
															<span>
																Asia Town IT Park Cebu City, Philippines
															</span>
														</h3>
														<ul>
															<li>Write maintainable, scalable, responsive, and cross-browser code.</li>
															<li>Collaborate with creative and development teams on the execution of ideas and projects. </li>
															<li>Promote and communicate new ideas, process improvements, and new technologies to team members. </li>
															<li>Updated and streamlined existing code to improve site performance.</li>
															<li>Utilized modern JavaScript and HTML 5 techniques, frameworks, and libraries. </li>
															<li>Wrote support documentation and provided training to internal and external users. </li>
															<li>Worked collaboratively with a cross-functional team to define and develop product roadmaps.</li>
															<li>Responsible for developing and maintaining high quality web user interfaces for clients.</li>
														</ul>
													</div>

													<div>
														<h2>
															<strong>
																<span className="highlight">
																	Head Graphics User Interface
																	Designer/Developer
																</span>
															</strong>
														</h2>
														<h3>
															Utilibill Cloud Billing & CIS for
															Utilities around the world<br />
															<span>
																Mindanao Avenue Cebu Business Park Cebu City,
																Philippines
															</span>
														</h3>
														<ul>
															<li>Updated and redesigned the Utilibill SAAS user interface.</li>
															<li>Applied frontend user interface updates to improve user experience.</li>
															<li>Peer review for frontend code and updates.</li>
															<li>Integrated Jquery and vanilla Javascript frontend libraries.</li>
														</ul>
													</div>

													<div>
														<h2>
															<strong>
																<span className="highlight">Frontend Development Team Leader</span>
															</strong>
														</h2>
														<h3>
															Techgrowth Global<br />
															<span>
															Asia Town IT Park Cebu City, Philippines
															</span>
														</h3>
														<ul>
															<li>
																Managed frontend development resources and
																worked closely with internal teams to execute
																large, technically challenging, development
																projects in a fast-paced, innovative IT
																environment
															</li>
															<li>
																Execute multiple web-based applications
															</li>
															<li>
																Worked closely with internal clients to develop
																and execute IT initiatives
															</li>
															<li>
																Converted designs to high quality html/css
																templates
															</li>
															<li>
																Coordinated with business analysts and other
																internal clients to determine project
																requirements.
															</li>
															<li>
																Trained and calibrated new hired developers.
															</li>
														</ul>
													</div>

													<div>
														<h2>
														<strong>
															<span className="highlight">
														Flash Developer
														</span>
														</strong>
														</h2>
														<h3>
															Booom Interactive<br />
															<span>
															AS Fortuna street Cebu city, Philippines
															</span>
														</h3>
														<ul>
															<li>
																Developed flash tutorials for Microsoft applications
															</li>
															<li>
																Converted simple Japanese games to flash
																applications.
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
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
export default AboutMe;
