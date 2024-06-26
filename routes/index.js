var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate(
  
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/events',
    failureRedirect: '/events'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/events');
  });
});

module.exports = router;

