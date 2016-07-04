'use strict'

const express             = require('express');
const path                = require('path');
const logger              = require('morgan');
const bodyParser          = require('body-parser');
const session             = require('express-session');
const methodOverride      = require('method-override');
// const cors                = require('cors')

const homeControl         = require('./controller/home_controller');
const bikesControl        = require('./controller/bikes_controller');
const apiControl         = require('./controller/api_controller')

const homeRoute       = require('./controller/home');
const userRoute       = require('./controller/user');

const dbBikes             = require('./models/bikeDB')

const app                 = express()
const PORT                = process.env.PORT || process.argv[2] || 3000

app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
});

// Adding session as a middleware
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'testsecret',
  cookie: {maxAge: 60000}
}));

// Adding Method override to allow our form to delete
app.use(methodOverride('_method'));

// set up logging so that we can see what's happening
app.use( logger('dev') );
app.use(bodyParser.urlencoded({extended: false}));

// set up ejs to render the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname,'/bower_components')))

app.use('/', homeControl);
app.use('/api', apiControl);
app.use('/search', bikesControl);
app.use('/log', homeRoute);
app.use('/user', userRoute);




