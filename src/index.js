import "./assets/stylesheets/styles.scss";
import "font-awesome/scss/font-awesome.scss";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { siteStore, defaultState } from "./app/reducers";

import Home from "./app/components/Home";
import NotFound from "./app/components/NotFound";
import AboutMe from "./app/components/AboutMe";
import WhatIDo from "./app/components/WhatIDo";
import MyWork from "./app/components/MyWork";

if (process.env.NODE_ENV !== "production") {
	require("../build/index.html");
}

const Root = () => (
	<Router>
		<Route
			render={({ location }) => (
				<CSSTransitionGroup
					transitionName='pageAnimate'
			    transitionEnterTimeout={2000}
			    transitionLeaveTimeout={1000}
			    component='div'
			    className='anidiv'
				>
					<Switch location={location} key={location.key}>
							<Route path="/" exact component={Home} />
							<Route path="/aboutme" exact component={AboutMe} />
							<Route path="/whatido" exact component={WhatIDo} />
							<Route path="/mywork" exact component={MyWork} />
							<Route path="/mywork" exact component={MyWork} />
							<Route component={NotFound} />
					</Switch>
				</CSSTransitionGroup>
			)}
		/>
	</Router>
);

render(
	<Provider store={createStore(siteStore, defaultState)}>
		<Root />
	</Provider>,
	document.getElementById("root")
);
