import React from "react";
import ProjectContainer from "./projects/ProjectContainer";
import { randomdelay } from '../../helpers'

class Projects extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
					<div className="col-md-6">
						<ProjectContainer delay={randomdelay()} />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
