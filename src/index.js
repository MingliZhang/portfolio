import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import {
    getFirestore,
    connectFirestoreEmulator,
} from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: 'AIzaSyDj1fRq4PkW8ES3-0kkHRm6yslX1zBkEGA',
    authDomain: 'portfolio-7d0c2.firebaseapp.com',
    projectId: 'portfolio-7d0c2',
    storageBucket: 'portfolio-7d0c2.appspot.com',
    messagingSenderId: '87138659755',
    appId: '1:87138659755:web:85f2e482e28cc4779776ee',
    measurementId: 'G-JK3CDJ5R6X',
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    connectFirestoreEmulator(db, 'localhost', 8080);
}

let theme = localStorage.getItem("MingliZhang'sTheme");

function invalidateEmail(mail) {
    if (
        mail.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
        return false;
    } else {
        return true;
    }
}

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
