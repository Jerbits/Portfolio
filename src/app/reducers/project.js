//Apply active state for projects when mouse is hovered over. Add reset to remove all hover 
//flags to remove unwanted mouseleave behavior
const projectStore = (state = {}, action) => {
	switch(action.type){
		case "ACTIVE":
			return state.map(project => 
							(project.title === action.title) 
							? {...project, active: !project.active} 
							: project
						);
		case "RESET":
			return state.map(project => 
							(project.title !== action.title) 
							? {...project, active: false} 
							: project
						);
		default:
			return state;
	}
}

export default projectStore;