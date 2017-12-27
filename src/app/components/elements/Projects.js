import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { randomdelay } from "../../helpers";

import ProjectContainer from "./projects/ProjectContainer";

import { sethover } from '../../actions';
import { resethover } from '../../actions';

//Add dispatch and state maps for props to relay attributes to looped project containers
const mapStateToProps = state => {
	return {
		projectArray: state.projectStore
	}
}
const	mapDispatchToProps = dispatch => {
	return{
		onEnter: title => {
			dispatch(sethover(title));
		},
		onLeave: title => {
			dispatch(resethover(title));
		}
	}
}

//Calling randomvalue function in parent Projects container to randomly apply delay for 
//each ProjectCointainer for better in view transition
class Projects extends React.Component {
	constructor(){
		super();
		this.state = {
			projectInviewDelay: []
		}
	}
	componentWillMount(){
		//when component mounts set random delay numbers as array to let it be called only once
		let projectInviewDelay = [];
		this.props.projectArray.forEach(array=>{
			projectInviewDelay.push(randomdelay(0));
		});
		projectInviewDelay = {...this.state, projectInviewDelay}
		this.setState(projectInviewDelay);
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					{
						this.props.projectArray.map((project, index) => {
						{/* Adding class on bottom 2 to prevent screen from moving when scrolling down */}
							let hiddenclass = (index > 8) ? "col-md-4 col-sm-6 ohidden" : "col-md-4 col-sm-6";
							return (
								<div className={hiddenclass} key={index}>
									<ProjectContainer
										delay={this.state.projectInviewDelay[index]} 
										img={project.img} 
										title={project.title}  
										url={project.url} 
										enter={this.props.onEnter} 
										leave={this.props.onLeave} 
										review={project.review} 
										click={project.active}
									/>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
	static propTypes = {
    onLeave: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    projectArray: PropTypes.array.isRequired,
  }
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Projects)
