var express = require('express');
var router = express.Router();

router.use(express.static(__dirname+"./public/"))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Excellent Magnetics India Pvt. Ltd.' });
});

/* GET About page. */
router.get('/about/', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET quality page. */
router.get('/quality/', function(req, res, next) {
  res.render('quality', { title: 'Quality Guidelines' });
});

/* GET products page. */
router.get('/products/', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

/* GET Career page. */
router.get('/career/', function(req, res, next) {
  res.render('career', { title: 'Career' });
});

/* GET Contact page. */
router.get('/contact/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET air-coils page. */
router.get('/air-coils/', function(req, res, next) {
  res.render('air-coils', { title: 'Contact' });
});

/* GET bit-coils page. */
router.get('/bit-coils/', function(req, res, next) {
  res.render('bit-coils', { title: 'Contact' });
});

/* GET current-tfr-series page. */
router.get('/current-tfr-series/', function(req, res, next) {
  res.render('current-tfr-series', { title: 'Contact' });
});

/* GET drum-coils page. */
router.get('/drum-coils/', function(req, res, next) {
  res.render('drum-coils', { title: 'Contact' });
});

/* GET edr-series page. */
router.get('/edr-series/', function(req, res, next) {
  res.render('edr-series', { title: 'Contact' });
});

/* GET ee-series page. */
router.get('/ee-series/', function(req, res, next) {
  res.render('ee-series', { title: 'Contact' });
});

/* GET efd-series page. */
router.get('/efd-series/', function(req, res, next) {
  res.render('efd-series', { title: 'Contact' });
});

/* GET etd-series page. */
router.get('/etd-series/', function(req, res, next) {
  res.render('etd-series', { title: 'Contact' });
});

/* GET line-filters page. */
router.get('/line-filters/', function(req, res, next) {
  res.render('line-filters', { title: 'Contact' });
});

/* GET pq-series page. */
router.get('/pq-series/', function(req, res, next) {
  res.render('pq-series', { title: 'Contact' });
});

/* GET rm-series page. */
router.get('/rm-series/', function(req, res, next) {
  res.render('rm-series', { title: 'Contact' });
});

/* GET sheet-metal-components page. */
router.get('/sheet-metal-components/', function(req, res, next) {
  res.render('sheet-metal-components', { title: 'Contact' });
});

/* GET shunts page. */
router.get('/shunts/', function(req, res, next) {
  res.render('shunts', { title: 'Contact' });
});

/* GET smd-tfr page. */
router.get('/smd-tfr/', function(req, res, next) {
  res.render('smd-tfr', { title: 'Contact' });
});

/* GET torriodal-tfr-series page. */
router.get('/torriodal-tfr-series/', function(req, res, next) {
  res.render('torriodal-tfr-series', { title: 'Contact' });
});

module.exports = router;
