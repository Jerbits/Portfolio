import React from "react";
import PropTypes from 'prop-types';
import sunmoon from "images/img_sunmoon";
import sunmoon2 from "images/img_sunmoon2";
import sunmoon3 from "images/img_sunmoon3";
import sunmoon4 from "images/img_sunmoon4";

//Component for switching sun and moon images for each time of the day. Triggered by timeofdayprops

class Sky extends React.Component {
	changeDay(day) {
		switch (day) {
			case "night":
				return <img src={sunmoon} alt="img" id="sunmoon" />;
				break;
			case "dawn":
				return <img src={sunmoon2} alt="img" id="sunmoon2" />;
				break;
			case "noon":
				return <img src={sunmoon3} alt="img" id="sunmoon3" />;
				break;
			case "dusk":
				return <img src={sunmoon4} alt="img" id="sunmoon4" />;
				break;
		}
	}
	render() {
		return (
			<div className="skybox">
				<div className="sky" />
				<div className="sunmoon">{this.changeDay(this.props.stateofday)}</div>
			</div>
		);
	}
	static propTypes = {
    stateofday: PropTypes.string.isRequired
  }
}

export default Sky;
