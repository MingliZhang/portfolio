const nameElement = document.getElementById('name');
const subjectElement = document.getElementById('subject');
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');
const respond = document.getElementById('respond');

function ValidateEmail(mail) {
	let mailformat =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (mail.match(mailformat)) {
		return true;
	} else {
		return false;
	}
}

const handleSendButton = async function (event) {
	event.preventDefault();
	event.stopPropagation();

	const name = nameElement.value;
	const subject = subjectElement.value;
	const email = emailElement.value;
	const message = messageElement.value;

	if (
		name.length === 0 ||
		subject.length === 0 ||
		email.length === 0 ||
		message.length === 0
	) {
		respond.innerHTML = `<p>Please enter all of the fields above!</p>`;
	} else {
		if (ValidateEmail(email)) {
			respond.innerHTML = `<p>Processing, please wait.</p>`;
			try {
				const result = await axios({
					method: 'post',
					url: 'https://us-central1-portfolio-a6fab.cloudfunctions.net/messages',
					data: {
						name: name,
						email: email,
						message: message,
						subject: subject,
					},
				});
				respond.innerHTML = `<p>The message has been recieved.</p>`;
				nameElement.value = '';
				subjectElement.value = '';
				emailElement.value = '';
				messageElement.value = '';
			} catch (err) {
				respond.innerHTML = `<p>An error has occured on the server. Please try again latter.</p>`;
			}
		} else {
			respond.innerHTML = `<p>Please enter an valid email address!</p>`;
		}
	}
};

document
	.getElementById('submit-btn')
	.addEventListener('click', handleSendButton);
