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
														<FontAwesome name="envelope" /><span> <a href="mailto:jerome8vercide@yahoo.com">Mail me!</a> </span>
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
															<li>Develop interactive User Interfaces</li>
															<li>
																Ensure the technical feasibility of UI/UX
																designs
															</li>
															<li>
																Handle application optimisations for maximum
																speed and scalability
															</li>
															<li>
																Collaborate with other team members and
																stakeholders
															</li>
															<li>
																Communicate with clients to develop and document
																website requirements. Provide project cost
																estimations
															</li>
															<li>
																Write semantic, well-formed responsive HTML5
																markups and CSS.
															</li>
															<li>
																May lead and co-ordinate multidisciplinary teams
																to develop website graphics, content, and UI
																interactivity. Leads two junior frontend
																developers. Collaborates with team to develop
																large projects involving web development,
																content migration, multilingual integration, and
																mobile responsive development.
															</li>
															<li>
																Research and evaluate a variety of interactive
																media software to integrate to our existing
																skillsets.
															</li>
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
															<li>Redesigned SAAS GUI.</li>
															<li>
																Front end/UI updates to improve user experience.
															</li>
															<li>
																Peer review and approval of all code created for
																updates
															</li>
															<li>
																Converted designs to high quality bootstrap
																compliant modules.
															</li>
															<li>
																Integrated jquery/javascript frontend modules
																e.g. draggable widgets, responsive ui,
																responsive menus, module generators
															</li>
															<li>Interview / Evaluate new GUI developers</li>
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
																Executed multiple web-based application
																projects.
															</li>
															<li>
																Worked closely with internal clients to develop
																and execute IT initiatives.
															</li>
															<li>
																Converted designs to high quality html/css
																templates.
															</li>
															<li>
																Coordinated with business analysts and other
																internal clients to determine project
																requirements.
															</li>
															<li>
																Trained and calibrated new hired developers.
															</li>
															<li>
																Developed a process to systemize frontend
																development.
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
																Developed flash based Microsoft application
																tutorials.
															</li>
															<li>
																Converted simple Japanese games to flash based
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
