import React from "react";
import FontAwesome from "react-fontawesome";

import Navigation from "./elements/Navigation";
import Slider from "./elements/Slider";
import Sky from "./elements/Sky";
import Feature from "./elements/Feature";

import HTML5 from "images/tech/HTML5.png";
import concrete5 from "images/tech/concrete5.png";
import debian from "images/tech/debian.png";
import javascript from "images/tech/javascript.png";
import less from "images/tech/less.png";
import photoshop from "images/tech/photoshop.png";
import react from "images/tech/react.png";
import sass from "images/tech/sass.png";
import bootstrap from "images/tech/bootstrap.png";
import css from "images/tech/css.png";
import git from "images/tech/git.png";
import jquery from "images/tech/jquery.png";
import mysql from "images/tech/mysql.png";
import php from "images/tech/php.png";
import redux from "images/tech/redux.png";
import webpack from "images/tech/webpack.png";

class WhatIDo extends React.Component {
	render() {
		return (
			<div id="wrapper" className="noon">
				<Navigation />
				<Sky stateofday="noon" />
				<section className="body1bg">
					<div className="seasonbox">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="header">
										<h1>WHAT I DO</h1>
									</div>
								</div>
							</div>
							<div className="row">
								<Feature faname='paint-brush' title="Design"  />
								<Feature faname='cogs' title="Development"  />
								<Feature faname='arrow-circle-up' title="Deployment" />
							</div>
							<div className="row">
								<div className="col-md-12">
								<div className="commentbox noimg">
										<p>
											As a <strong><span>frontend developer</span></strong>, 
												I am responsible for the translation of the UI/UX design
												wireframes to actual code that will produce visual
												elements of the application. Works with the UI/UX
												designer and bridge the gap between graphical design and
												technical implementation, taking an active role on both
												sides and defining how the application looks as well as
												how it works.
											</p>
										</div>
									<div className="commentbox noimg">
									<h3>MY TOOLS</h3>
										<div className="toolsdiv">
											<div><p><img  src={HTML5} alt="HTML5" /></p><p>HTML5</p></div>
											<div><p><img  src={concrete5} alt="concrete5" /></p><p>concrete5</p></div>
											<div><p><img  src={debian} alt="debian" /></p><p>debian</p></div>
											<div><p><img  src={javascript} alt="javascript" /></p><p>javascript</p></div>
											<div><p><img  src={less} alt="less" /></p><p>less</p></div>
											<div><p><img  src={photoshop} alt="photoshop" /></p><p>photoshop</p></div>
											<div><p><img  src={react} alt="react" /></p><p>react</p></div>
											<div><p><img  src={sass} alt="sass" /></p><p>sass</p></div>
											<div><p><img  src={bootstrap} alt="bootstrap" /></p><p>bootstrap</p></div>
											<div><p><img  src={css} alt="css" /></p><p>css</p></div>
											<div><p><img  src={git} alt="git" /></p><p>git</p></div>
											<div><p><img  src={jquery} alt="jquery" /></p><p>jquery</p></div>
											<div><p><img  src={mysql} alt="mysql" /></p><p>mysql</p></div>
											<div><p><img  src={php} alt="php" /></p><p>php</p></div>
											<div><p><img  src={redux} alt="redux" /></p><p>redux</p></div>
											<div><p><img  src={webpack} alt="webpack" /></p><p>webpack</p></div>
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
export default WhatIDo;
