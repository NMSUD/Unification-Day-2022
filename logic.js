let timeState = 'local';
function convertTime(timestamp) {
	const date = new Date(timestamp * 1000);
	const options = {
		dateStyle: 'full',
		timeStyle: 'short',
	}
	if (timeState == 'GMT') options.timeZone = 'UTC';
	const formattedDate = date.toLocaleString([], options);
	const formattedDateString = (() => {
		if (timeState == 'GMT') {
			return formattedDate + ' GMT';
		} else {
			return formattedDate;
		}
	})();
	return formattedDateString;
}

function calcTime(timezone, time) {
	const times = {
		EU: {
			start: 1671274800,
			end: 1671296400,
		},
		NA: {
			start: 1671318000,
			end: 1671339600,
		},
	}
	return convertTime(times[timezone][time]);
}

function switchTime() {
	const EUStartOutput = document.getElementById('timeStartEU');
	const EUEndOutput = document.getElementById('timeEndEU');
	const NAStartOutput = document.getElementById('timeStartNA');
	const NAEndOutput = document.getElementById('timeEndNA');
	const timezoneModeOut = document.getElementById('timezoneMode');

	const EUStartTime = calcTime('EU', 'start');
	const EUEndTime = calcTime('EU', 'end');
	const NAStartTime = calcTime('NA', 'start');
	const NAEndTime = calcTime('NA', 'end');

	EUStartOutput.innerText = EUStartTime;
	EUEndOutput.innerText = EUEndTime;
	NAStartOutput.innerText = NAStartTime;
	NAEndOutput.innerText = NAEndTime;
	timezoneModeOut.innerText = (timeState == 'GMT') ? 'GMT' : 'Your local timezone';
	timeState = (timeState == 'GMT') ? 'local' : 'GMT';
}


function switchTable(selectElement) {
	const tables = {
		EU: document.getElementById('EU'),
		NA: document.getElementById('NA'),
	}
	const selected = selectElement.value;
	for (const table in tables) {
		if (table == selected) {
			tables[table].style.display = '';
		} else {
			tables[table].style.display = 'none';
		}
	}
}