const nameElement = document.getElementById('name');
const subjectElement = document.getElementById('subject');
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');
const respond = document.getElementById('respond');
const formElement = document.getElementById('contact-form');

const mailformat =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function InvalidateEmail(mail) {
	if (mail.match(mailformat)) {
		return false;
	} else {
		return true;
	}
}

formElement.addEventListener('submit', async (e) => {
	e.preventDefault();
	e.stopPropagation();
	const name = nameElement.value;
	const subject = subjectElement.value;
	const email = emailElement.value;
	const message = messageElement.value;
	if (InvalidateEmail(email)) {
		respond.innerHTML = `<p>Please provide a valid email address!</p>`;
		return;
	} else if (
		name.length === 0 ||
		subject.length === 0 ||
		email.length === 0 ||
		message.length === 0
	) {
		respond.innerHTML = `<p>Please provide all of the fields above!</p>`;
		return;
	}
	try {
		const result = await axios({
			method: 'post',
			url: '/api/message',
			data: {
				name: name,
				email: email,
				message: message,
				subject: subject,
			},
		});
		formElement.reset();
	} catch (error) {
		respond.innerHTML = `<p>An Error has occured, please contact me through email directly.</p>`;
	}
});
