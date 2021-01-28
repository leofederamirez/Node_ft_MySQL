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
  res.render('update', {title: 'CRUD', legend: 'Actualizar Registro', label: 'Id', button: 'Actualizar'})
})
 /* GET delete page.*/
 router.get('/delete', (req,res) => {
   res.render('delete', {title: 'CRUD', legend: 'Eliminar Registro', label: 'Id', button: 'Eliminar'})
 })
module.exports = router;