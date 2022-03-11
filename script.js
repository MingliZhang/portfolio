// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {
	getFirestore,
	doc,
	setDoc,
	collection,
	onSnapshot,
	getDocs,
	deleteDoc,
	updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';

const db = getFirestore();

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

	let data = {
		name: nameElement.value,
		subject: subjectElement.value,
		email: emailElement.value,
		message: messageElement.value,
	};

	if (
		data.name.length === 0 ||
		data.subject.length === 0 ||
		data.email.length === 0 ||
		data.message.length === 0
	) {
		respond.innerHTML = `<p>Please enter all of the fields above!</p>`;
	} else {
		if (ValidateEmail(email)) {
			respond.innerHTML = `<p>Processing, please wait.</p>`;
			try {
				await setDoc(doc(db, 'messages', data.message), data);
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
