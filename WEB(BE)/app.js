const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const router = require('./src/router/index')
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("views", "./src/views");
app.set('view engine', 'ejs');

app.use(router)

app.listen(PORT, function(){
	console.log("Connected on port " + PORT);
});

