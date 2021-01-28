var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD' });
});

/* GET create page. */
router.get('/create', (req,res) => {
  res.render('create', { title: 'CRUD' })
})

/* GET update page. */
router.get('/update', (req,res) => {
  res.render('update', {title: 'CRUD'})
})

module.exports = router;
