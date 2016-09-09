var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poi = mongoose.model('Poi');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pois', function(req, res, next) {
  Poi.find(function(err, pois){
    if(err){ return next(err); }   
    res.json(pois);
  });
});

router.post('/addpoi', function(req, res, next) {
  var poi = new Poi(req.body);

  poi.save(function(err, poi){
    if(err){ return next(err); }

    res.json(poi);
  });
});

module.exports = router;
