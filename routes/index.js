var express = require('express');
var router = express.Router();
var db = require('../db/db')

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
/*POST select pag.*/
router.post('/select',(req,res) => {
  let id = req.body.id
  db.query(`select * from cliente where id = ${id};`,(err,rows) => {
    if(err) throw err;
    console.log(rows);
    res.render('read', {rows: rows, title: 'CRUD'})
  });
})

/*POST insert pag.*/
router.post('/insert', (req,res) => {
  console.log(req.body.nombre)
  let nombre = req.body.nombre
  let apellido = req.body.apellido
  let telefono = req.body.telefono
  let correo  = req.body.correo
  db.query(`insert into cliente (nombre,apellido,telefono,correo) values ('${nombre}','${apellido}', ${telefono}, '${correo}');`,(err, rows) => {
    if (err) throw err;
    console.log(rows.insertId)
    res.redirect('/')
  })
  
})
module.exports = router;