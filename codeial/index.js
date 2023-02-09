const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
// connected the database

const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router

// set up the view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running serve : ${err}`);
    }
    console.log(`Server is running on port :${port}`);
});




