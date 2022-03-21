// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB05mlBu0_zFGq2WVlCZJT11FX0g-3uczk',
	authDomain: 'portfolio-a6fab.firebaseapp.com',
	databaseURL: 'https://portfolio-a6fab-default-rtdb.firebaseio.com',
	projectId: 'portfolio-a6fab',
	storageBucket: 'portfolio-a6fab.appspot.com',
	messagingSenderId: '230907708278',
	appId: '1:230907708278:web:6dc81647eb0a48e9f1b057',
	measurementId: 'G-RTRJEJQ5P4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
				const docRef = await addDoc(collection(db, 'messages'), data);
				console.log(docRef);
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
