import 'bulma';
import './style.scss';
import { switchTime, switchTable } from './logic';

const timezoneSelect = document.getElementById('timezoneSelect') as HTMLSelectElement;
if (timezoneSelect) {
	// this is to execute this after everything else has executed
	setTimeout(() => {
		switchTime();
		switchTable(timezoneSelect);

	}, 0);
}

document.getElementById('timezoneSelect')?.addEventListener('change', function () { switchTable(this as HTMLSelectElement) });
document.getElementById('switchButton')?.addEventListener('click', () => switchTime());

const discordIframeCode = `<iframe src="https://discord.com/widget?id=912548805763801159&theme=light" width="400" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`;
const section = document.getElementById('discord');
if (section) section.innerHTML = discordIframeCode;