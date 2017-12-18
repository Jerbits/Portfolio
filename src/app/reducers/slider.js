const sliderStore = (state = {}, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				sliderState: state.sliderState + 1
			};
		case "RESET":
			return {
				...state,
				sliderState: 1
			};
		default:
			return state;
	}
};

export default sliderStore;