const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const {
	initializeApp,
	applicationDefault,
	cert,
} = require('firebase/app');
const {
	getFirestore,
	Timestamp,
	FieldValue,
} = require('firebase/firestore');

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

const app = express();
initializeApp(firebaseConfig);

const db = getFirestore();

app.use(bodyParser.json());
app.use(express.static(__dirname));

// app.get('/', (req, res) => {
// 	res.render('index.html');
// });

app.post('/api/message', (req, res) => {
	console.log(req.body);
	return res.send();
});
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Working on port ' + PORT);
});
