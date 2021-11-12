var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PS4' });
});


//Do stuff with form
router.post('/ps4', (req, res) => {
  //console.log("param is ", req.body.field_offices);
  let param= req.body.field_offices;
  res.send(param);
});




module.exports = router;
