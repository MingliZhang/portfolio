import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
const { getStorage, connectStorageEmulator } = require('firebase/storage');

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

const storage = getStorage(firebaseApp);

if (
    process.env.ENV_TYPE === 'development' ||
    process.env.ENV_TYPE === 'testing'
) {
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, 'localhost', 9199);
}

export { firebaseApp, db };
