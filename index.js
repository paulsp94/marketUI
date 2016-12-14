var fs = require('fs');
var path = require('path');
var express = require('express');
var axios = require('axios');
var firebase = require('firebase');
var compress = require('compression');
var layouts = require('express-ejs-layouts');
var config = require('./config');
var app = express();

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', {layout: 'layout'});
app.set('views', path.join(process.cwd(), '/server/views'));

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
      update[`/Users/${newUserKey}`] = userData;

      return firebase.database().ref().update(update).then(() => {
        response.redirect('/profile');
      });
    })
    .catch(function (error) {
      response.redirect('/profile');
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
