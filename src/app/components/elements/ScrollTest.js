import React from 'react';
import { Watch } from  'scrollmonitor-react';

export default Watch(class ScrollTest extends React.Component {
	render () {
		let text;
		if (this.props.isInViewport) {
			text = this.props.proptest;
		} else {
			text = 'You will never see this because it gets replaced when it enters the viewport.'
		}

		return (
			<span>
				{text}
				{this.props.children}
			</span>
		);
	}
});