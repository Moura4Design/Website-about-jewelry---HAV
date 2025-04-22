const path = require('path');
const express = require('express');
const app = express();



app.use(express.static('app'));


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/app/home.html'));
});

app.listen(9080, () => {
	console.log('It is running');
});