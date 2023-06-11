import { Times, sharedData } from '../logic';
import '../startup';

const times: Times = {
	EU: {
		start: 1671274800,
		end: 1671296400,
	},
	NA: {
		start: 1671318000,
		end: 1671339600,
	},
}

sharedData.times = times;