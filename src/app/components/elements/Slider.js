import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Slider1 from './sliders/Slider1';
import Slider2 from './sliders/Slider2';
import Slider3 from './sliders/Slider3';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { incrementSlider, resetSlider } from '../../actions';

//Add store state to props
const mapStateToProps = state => {
	return {
		slideCount: state.sliderStore.sliderState,
	}
}
//Add store dispatch to props
const mapDispatchToProps = dispatch =>{
	return{
		onChangeSlide : () => {
			dispatch(incrementSlider())
		},
		onLastSlide : () => {
			dispatch(resetSlider())
		}
	}
}

class Slider extends React.Component {
	constructor() {
		super();
		this.changeSlide = this.changeSlide.bind(this);
	}
	changeSlide() {
		//When slider counter reaches maximum number of slider,
		//reset slider counter to 1
		const { onChangeSlide, slideCount, onLastSlide } = this.props;
		slideCount < 3 ? onChangeSlide() : onLastSlide(); 
	}
	componentDidMount() {
		//When component mounts, add a setinterval function that changes
		//redux state tree for slider counter
		this.inval = setInterval(this.changeSlide, this.props.timeout);
	}
	componentWillUnmount(){
		//Clear interval when component unmounts
		clearInterval(this.inval);
	}
	render() {
		const { slideCount } = this.props;
		return (
			<div className="slider">
				<CSSTransitionGroup 
					transitionName="pslider" 
					transitionEnterTimeout={this.props.speed} 
					transitionLeaveTimeout={this.props.speed}>
						{/* Check slider count and display corresponding slider */}
						{slideCount === 1 ? <Slider1 key={slideCount} /> : null}
		 				{slideCount === 2 ? <Slider2 key={slideCount} /> : null}
		 				{slideCount === 3 ? <Slider3 key={slideCount} /> : null}
					</CSSTransitionGroup>
			</div>
		);
	}
}

Slider.propTypes = {
	speed: PropTypes.number.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Slider)

