//Slider Actions for increement (next slider item) and reset (set slider back to 1)
export const incrementSlider = () => {
	return{
		type: "INCREMENT"
	}
}
export const resetSlider = () => {
	return{
		type: "RESET"
	}
}

//Actions for mouseenter and mnouseleave on projects for mywork page
export const sethover = title =>{
	return{
		type: "ACTIVE",
		title
	}
}
export const resethover = title =>{
	return{
		type: "RESET",
		title
	}
}
