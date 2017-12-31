import React from 'react';
import PropTypes from 'prop-types'
import FontAwesome from "react-fontawesome";
import { Watch } from  'scrollmonitor-react';

export default Watch(class Feature extends React.Component {
	render() {
		return (
			<div className="col-xs-4">
				<div className="feature">
					<div>
						<FontAwesome
			        name={this.props.faname}
			        size='2x'
			      />
			      <h2>{this.props.title}</h2>
		      </div>
	      </div>
			</div>
		);
	}
	static propTypes = {
	  faname: PropTypes.string.isRequired,
	  title: PropTypes.string
	}
});
