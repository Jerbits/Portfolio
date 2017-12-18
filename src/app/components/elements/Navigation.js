import React from "react";
import { NavLink } from "react-router-dom";
import logo from "images/img_logo";
import logo2 from "images/img_logo2";
class Navigation extends React.Component {
	render() {
		return (
			<div className="navcont">
				<div className="container">
					<div className="logo">
						<NavLink activeClassName="acitve" className="nav-button" to="/">
							<img className="logo1" src={logo} alt="img" />
							<img className="logo2" src={logo2} alt="img" />
						</NavLink>
					</div>
					<nav id="myNav">
						<ul>
							<li>
								<NavLink activeClassName="acitve" to="/mywork">
									My Work
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="acitve" to="/aboutme">
									About Me
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="acitve" to="/whatido">
									What I Do
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}
export default Navigation;
