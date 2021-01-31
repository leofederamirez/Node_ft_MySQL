var express = require('express');
var router = express.Router();
var db = require('../db/db')

/* GET home page. */
router.get('/', function(req,res) {
  db.query(`SELECT * FROM visitante;`,(err,rows)=> {
    if(err){
      res.send(err)
    };
    res.render('index', {title: 'CRUD', rows: rows})
  })
});
/* GET create page. */
router.get('/create', (req,res) => {
  res.render('create', { title: 'CRUD' })
});
/* GET update page. */
router.get('/update', (req,res) => {
  res.render('update', {title: 'CRUD', legend: 'Actualizar Registro', label: 'Id', button: 'Actualizar'})
});
 /* GET delete page.*/
router.get('/delete', (req,res) => {
   res.render('delete', {title: 'CRUD', legend: 'Eliminar Registro', label: 'Id', button: 'Eliminar'})
});

/*====================================
                 POST              
======================================*/ 

/*POST select pag.*/
router.post('/select',(req,res) => {
  let id = req.body.id
  db.query(`select * from visitante where id = ${id};`,(err,rows) => {
    if(rows == ''){
      console.log('El Registro no exixte...')
      res.redirect('/')
    } 
    console.log(rows);
    res.render('read', {rows: rows, title: 'CRUD'})
  });
})

/*POST insert pag.*/
router.post('/insert', (req,res) => {
  console.log(req.body.nombre)
  let nombre = req.body.nombre
  let mensaje = req.body.mensaje
  db.query(`insert into visitante (nombre,apellido) values ('${nombre}','${mensaje}');`,(err, rows) => {
    if (err) {
      res.send(err)
    };
    console.log(rows.insertId)
    res.redirect('/')
  });
});

/*POST Update pag.*/
router.post('/actualizar',(req,res) => {
  console.log(req.body)
  let id = req.body.id;
  let nombre = req.body.nombre
  let mensaje = req.body.mensaje
  db.query(`UPDATE cliente SET nombre = '${nombre}', apellido = '${mensaje}' where id = ${id};`,(err) => {
    if (err) throw err;
    console.log('Usuario Actualizado ')
  });
  res.redirect('/')
});

module.exports = router;