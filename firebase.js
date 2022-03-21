
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB05mlBu0_zFGq2WVlCZJT11FX0g-3uczk",
	authDomain: "portfolio-a6fab.firebaseapp.com",
	databaseURL: "https://portfolio-a6fab-default-rtdb.firebaseio.com",
	projectId: "portfolio-a6fab",
	storageBucket: "portfolio-a6fab.appspot.com",
	messagingSenderId: "230907708278",
	appId: "1:230907708278:web:6dc81647eb0a48e9f1b057",
	measurementId: "G-RTRJEJQ5P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
