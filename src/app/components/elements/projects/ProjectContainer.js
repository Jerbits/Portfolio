import React from "react";
import { Watch } from  'scrollmonitor-react';

export default Watch(class ProjectContainer extends React.Component {
  render() {
    let show = this.props.isInViewport ? "inView outView" : "outView";
    return (
      <div className={show} 
        style={{
          transitionDelay: this.props.delay,
          height: "200px",
          backgroundColor: "blue",
          marginBottom: "20px"
        }}
      ></div>
    );
  }
});
