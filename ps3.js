//PS3.js

var express = require('express');
var router = express.Router();

//GET for part b
router.get('/', function(req, res, next) {
    res.render('ps3', { title: 'Solutions', part: 'b', partb: ' Hi there!' });

});

//POST for part c
router.post('/', ((req, res, next)=>{
    console.log('This is on the req body:', req.body.pc);
    res.render('ps3', {title: 'Solutions', part: 'c', partc: req.body.pc});
    //not showing up in pug
}));

//READ input params from named value for part d
router.get('/:myVar', ((req, res, next)=>{
    console.log('THis is on req.params: ', req.params.myVar);
    res.render('ps3', {title: 'Solutions', part: 'd', partd: req.params.myVar});
}));

//Example from class:
//router.get('/names/:fname/:lname', ((req, res, next) => {
//    res.send(`Received: ${req.params.fname} ${req.params.lname}`);

module.exports = router;