var express = require('express');
var router = express.Router();

let contactName = 'Raisa Amin';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    contactName: contactName
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    contactName: contactName
  });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

/* POST Contact page. */
router.post('/contact', function(req, res, next) {
  contactName = req.body.fname;
  res.redirect('/home');
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login'});
});

/* POST Login page. */
router.post('/login', function(req, res, next) {
  contactName = req.body.fname;
  res.redirect('/home');
});

module.exports = router;
