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

const dbBikes             = require('./models/bikeDB')

const app                 = express()
const PORT                = process.env.PORT || process.argv[2] || 3000

app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
});

// set up logging so that we can see what's happening
app.use( logger('dev') );

// set up ejs to render the views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeControl);
app.use('/api', apiControl);
app.use('/search', bikesControl);



