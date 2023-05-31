import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
const { getStorage, connectStorageEmulator } = require('firebase/storage');

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
