import React from "react";
import PropTypes from 'prop-types';
import { Watch } from "scrollmonitor-react";
import { ProjectFront } from "./Project";
import { ProjectBack } from "./Project";

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default Watch(
  class ProjectContainer extends React.Component {
    componentDidMount() {
      //After component mounts create a flipper function based on the reference node
      //Add mouseEnter and Leave event that flips element
      const flip = this.flipNode;
      flip.addEventListener("click", () => {
        this.props.leave(this.props.title);
        this.props.enter(this.props.title);
      });
    }
    render() {
      //When element is in viewport add the inview class along with the outview class
      //to triggerxw css transitions making element fade up
      let show = "outView";
      if (this.props.isInViewport) {
        show = this.props.isInViewport ? "inView outView" : null;
        this.props.stopWatcher();
      }
      return (
        <div
          className={show}
          ref={node => (this.flipNode = node)}
          style={{ transitionDelay: this.props.delay }}
        >
          {/* Switch components based on state */}
          <CSSTransitionGroup 
          transitionName="pbox" 
          transitionEnterTimeout={600} 
          transitionLeaveTimeout={300}>
          {!this.props.click ? ( <ProjectFront key='1' delay={this.props.delay} img={this.props.img} />) : null }
          {this.props.click ? ( <ProjectBack key='2' title={this.props.title} url={this.props.url} review={this.props.review} />) : null }
          </CSSTransitionGroup>
        </div>
      );
    }
    static propTypes = {
      click: PropTypes.bool.isRequired,
      delay: PropTypes.string.isRequired,
      leave: PropTypes.func.isRequired,
      enter: PropTypes.func.isRequired,
      img: PropTypes.string,
      title: PropTypes.string,
      review: PropTypes.string,
      isInViewport: PropTypes.bool,
      stopWatcher: PropTypes.func
    }
  }
)





