import { combineReducers } from 'redux';

import sliderStore from './slider';

export const siteStore = combineReducers({
	sliderStore
});

export const defaultState = {
	sliderStore: {
		sliderState: 1
	}
};
