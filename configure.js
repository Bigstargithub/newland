const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const index = require('./index.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

nunjucks.configure('Template', {
    autoescape : true,
    express: app
});

app.get('/',(req,res)=>{
    res.render('header.html');
    // res.send('hihi');
});

app.listen(port, {

});