var fs = require('fs');
var path = require('path');
var express = require('express');
var axios = require('axios');
var firebase = require('firebase');
var compress = require('compression');
var layouts = require('express-ejs-layouts');
var config = require('./config');
var stripe = require("stripe")(config['config']['stripe']['clientSecretKey']);
var bodyParser = require('body-parser');
var app = express();

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', {layout: 'layout'});
app.set('views', path.join(process.cwd(), '/server/views'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(compress());
app.use(layouts);
app.use('/client', express.static(path.join(process.cwd(), '/client')));

app.disable('x-powered-by');

firebase.initializeApp(config['config']['firebase']);

var env = {
  production: process.env.NODE_ENV === 'production'
};

if (env.production) {
  Object.assign(env, {
    assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json')))
  });
}

app.get('/api', function (req, res) {
  res.send("api");
});

/**
 * On stripe callback, make a post request to stripe oaut
 * to fetch the user details.
 *
 * On success make another request to firebase and store the response from the stripe
 * **/
app.get('/stripe/callback', function (request, response) {
  var stripeConfig = config['config']['stripe'];
  var userId = request.query.state;

  axios.post(stripeConfig['accessTokenUrl'], {
    client_secret: stripeConfig['clientSecretKey'],
    code: request.query.code,
    grant_type: 'authorization_code'
  })
    .then(function (callback) {
      var newUserKey = firebase.database().ref().child('Users').push().key;
      var userData = callback.data;
      var update = {};
      userData['_id'] = newUserKey;
      userData['UserId'] = userId;
      update[`/Users/${newUserKey}`] = userData;

      return firebase.database().ref().update(update).then(() => {
        response.redirect('/');
      });
    })
    .catch(function (error) {
      response.redirect('/');
    });
});

/**
 * Endpoint to make the charges request to the Stripe
 *
 * Required Params: token => Stripe token Id
 *  it makes the payment request to the stripe and on success responds with status ok
 * **/
app.post('/stripe/checkout', function(request, response) {
  var paymentParams = request.body;
  var chargePercent = 10; // TODO change as per business need
  var applicationFee = parseInt((chargePercent * paymentParams.amount) / 100);

  stripe.charges.create({
    amount: paymentParams.amount,
    currency: 'usd',
    source: paymentParams.token,
    destination: paymentParams.sellerId,
    description: "Rscript.Market Transaction",
    application_fee: applicationFee // amount in cents
  }, function(err, charge) {
    if(err) {
      console.log(err);
      response.sendStatus(400);
    } else {
      var newSalesKey = firebase.database().ref().child('sales').push().key;
      var update = {};
      update[`/sales/${newSalesKey}`] = {
        _id: newSalesKey,
        buyerId: paymentParams.buyerId,
        productId: paymentParams.productId,
        paymentDetails: charge
      };

      return firebase.database().ref().update(update).then(() => {
        response.sendStatus(200);
      });
    }
  });
});

app.get('/*', function (req, res) {
  res.render('layout', {
    env: env
  });
});

var port = Number(process.env.PORT || 3001);
app.listen(port, function () {
  console.log('server running at localhost:3001, go refresh and see magic');
});

if (env.production === false) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');

  var webpackDevConfig = require('./webpack.config.development');

  new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: '/client/',
    contentBase: './client/',
    inline: true,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With'
    }
  }).listen(3000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }

    console.log('webpack dev server listening on localhost:3000');
  });
}
