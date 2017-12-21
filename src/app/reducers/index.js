import { combineReducers } from 'redux';

import sliderStore from './slider';
import projectStore from './project';

export const siteStore = combineReducers({
	sliderStore,
	projectStore
});

export const defaultState = {
	sliderStore: {
		sliderState: 1
	},
	projectStore: [
		{
			title: "Framework Theme",
			url: "http://framework57.c5box.com/",
			img: "images/projects/framework.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: "https://www.concrete5.org/marketplace/themes/framework/reviews"
		},
		{
			title: "Genesis Theme",
			url: "http://genesis.c5box.com/",
			img: "images/projects/genesis.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: "https://www.concrete5.org/marketplace/themes/genesis57/reviews"
		},
		{
			title: "TCP Lifesystems",
			url: "https://www.tcplifesystems.com/",
			img: "images/projects/tcp.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: null
		},
		{
			title: "Sidebar Theme",
			url: "http://sidebark57.c5box.com/",
			img: "images/projects/sidebar.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: "https://www.concrete5.org/marketplace/themes/sidebar/reviews"
		},
		{
			title: "Kodenta",
			url: "http://kodenta.com/",
			img: "images/projects/kodenta.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: null
		},
		{
			title: "Practicology",
			url: "https://www.practicology.com/",
			img: "images/projects/practicology.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: null
		},
		{
			title: "Datasouth",
			url: "http://datasouth.co.uk/",
			img: "images/projects/datasouth.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: null
		},
		{
			title: "Wimbledon Debentures",
			url: "https://www.wimbledondebentureholders.com/",
			img: "images/projects/wimbledon.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: null
		},
		{
			title: "Brimstone Theme",
			url: "http://brimstone57.c5box.com/",
			img: "images/projects/brimstone.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: "https://www.concrete5.org/marketplace/themes/brimstone1/reviews"
		},
		{
			title: "RussellFinex",
			url: "http://russellfinex.com/",
			img: "images/projects/russellfinex.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: null
		},
		{
			title: "Responsive Theme",
			url: "http://responsive57.c5box.com/",
			img: "images/projects/responsive.jpg",
			description: "The quick brown fox jumps over the lazy dog",
			active: false,
			review: "https://www.concrete5.org/marketplace/themes/responsive1/reviews"
		}
	]
};
