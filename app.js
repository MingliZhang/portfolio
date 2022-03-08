const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log('Working on port ' + PORT);
});
