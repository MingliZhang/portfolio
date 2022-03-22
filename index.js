import {
	getFirestore,
	collection,
	addDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const db = getFirestore();
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
		const docRef = await addDoc(collection(db, 'messages'), {
			name: name,
			email: email,
			message: message,
			subject: subject,
		});
		console.log('Document written with ID: ', docRef.id);
		formElement.reset();
	} catch (e) {
		respond.innerHTML = `<p>An Error has occured, please contact me through email directly.</p>`;
	}
});
