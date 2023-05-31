import { db } from './firebase';

import { invalidateEmail } from './util';

import './theme.js';

const nameElement = document.getElementById('name');
const subjectElement = document.getElementById('subject');
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');
const respond = document.getElementById('respond');
const formElement = document.getElementById('contact-form');

formElement.addEventListener('submit', async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = nameElement.value;
    const subject = subjectElement.value;
    const email = emailElement.value;
    const message = messageElement.value;
    if (invalidateEmail(email)) {
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
