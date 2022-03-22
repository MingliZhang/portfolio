let theme = localStorage.getItem("MingliZhang'sTheme");

if (theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = './styles/default.css';
	} else if (mode == 'green') {
		document.getElementById('theme-style').href = './styles/green.css';
	} else if (mode == 'blue') {
		document.getElementById('theme-style').href = './styles/blue.css';
	} else if (mode == 'purple') {
		document.getElementById('theme-style').href = './styles/purple.css';
	} else {
		console.log('unknown error occured!');
	}
	localStorage.setItem("MingliZhang'sTheme", mode);
}
