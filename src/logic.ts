const currentTime = new Date();
const timeZoneName = currentTime.toLocaleString([], { timeZoneName: 'short' }).split(' ').pop();
let timeState = 'local';

export interface Times {
	[key: string]: {
		[key: string]: number;
	}
}

export interface Schedule {
	time: string;
	event: string;
	baseName: string;
	planet: string;
	coordinates: string;
	[key: string]: string;
}

export interface Bases {
	baseName: string;
	planet: string;
	coordinates: string;
	[key: string]: string;
}

export const sharedData: {
	times?: Times
	schedule?: Schedule;
	bases?: Bases;
} = {};

function convertTime(timestamp: number) {
	const date = new Date(timestamp * 1000);	// NoSonar this is to convert from seconds to milliseconds
	const options: Intl.DateTimeFormatOptions = {
		dateStyle: 'full',
		timeStyle: 'short',
	}
	if (timeState == 'GMT') options.timeZone = 'UTC';
	const formattedDate = date.toLocaleString([], options);
	const formattedDateString = (() => {
		if (timeState == 'GMT') {
			return formattedDate + ' GMT';
		} else {
			return formattedDate + ' ' + timeZoneName;
		}
	})();
	return formattedDateString;
}

function calcTime(timezone: string, time: string): string {
	if (!sharedData.times) return '';
	return convertTime(sharedData.times[timezone][time]);
}

export function switchTime() {
	const EUStartOutput = document.getElementById('timeStartEU');
	const EUEndOutput = document.getElementById('timeEndEU');
	const NAStartOutput = document.getElementById('timeStartNA');
	const NAEndOutput = document.getElementById('timeEndNA');
	const timezoneModeOut = document.getElementById('timezoneMode');

	const EUStartTime = calcTime('EU', 'start');
	const EUEndTime = calcTime('EU', 'end');
	const NAStartTime = calcTime('NA', 'start');
	const NAEndTime = calcTime('NA', 'end');

	EUStartOutput!.innerText = EUStartTime;
	EUEndOutput!.innerText = EUEndTime;
	NAStartOutput!.innerText = NAStartTime;
	NAEndOutput!.innerText = NAEndTime;
	timezoneModeOut!.innerText = (timeState == 'GMT') ? 'GMT' : `Your local timezone (${timeZoneName})`;
	switchTimeTableTime();
	timeState = (timeState == 'GMT') ? 'local' : 'GMT';
}


export function switchTable(selectElement: HTMLSelectElement) {
	const tables: { [key: string]: HTMLTableElement } = {
		EU: document.getElementById('EU') as HTMLTableElement,
		NA: document.getElementById('NA') as HTMLTableElement,
	}
	const selected = selectElement.value;
	for (const table in tables) {
		tables[table]!.style.display = table == selected ? '' : 'none';
	}
}

function switchTimeTableTime() {
	const timeElements: NodeListOf<HTMLTableCellElement> = document.querySelectorAll('td[data-time]');

	for (const element of Array.from(timeElements)) {
		const time = element.dataset.time as string;
		if (timeState == 'GMT') {
			element.innerText = time;
			continue;
		}

		const timeOnly = time.split(' ');
		const hoursMinutes = timeOnly[0].split(':');

		currentTime.setUTCHours(parseInt(hoursMinutes[0]));
		currentTime.setUTCMinutes(parseInt(hoursMinutes[1]));
		currentTime.setUTCSeconds(0);

		const date = currentTime.toLocaleTimeString([], { timeStyle: 'short' });
		element.innerText = `${date} ${timeZoneName}`;
	}
}