var express=require('express');
var app= express();
var path=require('path');


app.set('views',path.join(__dirname,'./views'))
console.log(path.join(__dirname,'./views'));
app.set('view engine', 'hbs');


