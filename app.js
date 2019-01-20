var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cmd = require('node-cmd');
var upload = require('express-fileupload');

var users = require('./routes/users');
var prospectMeta = require('./routes/prosect_meta_data_route');
var prospectSpend = require('./routes/prospect_spend_route');
var prosepectSpendLimited = require('./routes/prospect_spend_limited_route');
var prospectSpendSummary = require('./routes/prospect_spend_summary_route');
var prospectSavings = require('./routes/prospect_savings_route');
var tasks = require('./routes/tasks_route');
var prospectSavingsAggregate = require('./routes/prospect_savings_aggregate_route');
var unmatchedSuppliers = require('./routes/unmatched_suppliers_route');
var industryTypes = require('./routes/industry_meta_data_route');
var overallEnablement = require('./routes/overall_supplier_enablement_route');
var prospectListing = require('./routes/prospect_listing_route');
var supplierEnablement = require('./routes/supplier_enablement_route');
var prospectMatch = require('./routes/prospect_match_rate_route');
var supplierMatch = require('./routes/supplier_match_route');
var runR = require('./routes/runR');
var fileOps = require('./routes/fileOps');

var app = express();

const port = 4000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('html',require('ejs').renderFile);

app.use(upload());

app.use(function (req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));

app.use('/users', users);
app.use('/prospectsMeta', prospectMeta);
app.use('/prospectSpend', prospectSpend);
app.use('/prosepectSpendLimited', prosepectSpendLimited);
app.use('/prospectSpendSummary', prospectSpendSummary);
app.use('/prospectSavings', prospectSavings);
app.use('/tasks', tasks);
app.use('/prospectSavingsAggregate', prospectSavingsAggregate);
app.use('/unmatchedSuppliers', unmatchedSuppliers);
app.use('/industryTypes', industryTypes);
app.use('/overallEnablement', overallEnablement);
app.use('/prospectListing', prospectListing);
app.use('/supplierEnablement', supplierEnablement);
app.use('/prospectMatch', prospectMatch);
app.use('/supplierMatch', supplierMatch);
app.use('/runR', runR);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/**
 * Defines the port at which the server will be available
 */
app.listen(port, () => {
  console.log('Server started at port ' + port);
});

module.exports = app;
