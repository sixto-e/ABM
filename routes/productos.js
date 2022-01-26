var express = require('express');
const res = require('express/lib/response');

var router = express.Router();
const { get, eliminar, create, update, single } = require('../models/productos');

const all = async(req,res)=>{
    const habilitado = true;
    const allProd = await get(habilitado);
    console.log(allProd);
    res.render('productos', {allProd});
}

const borrar = async(req,res)=>{
    const id = req.params.id;
    const habilitado = false;
    const Itemborrado = await eliminar(habilitado, id);
    console.log(Itemborrado);
    res.redirect('/productos');
}

const agregar = async(req,res)=>{
    const obj = req.body;
    const newProd = await create(obj);
    console.log(newProd);
    res.redirect('/productos');

}

const modificar = async(req, res)=>{
    const id = req.params.id;
    const proModif = req.body;
    console.log(proModif);
    const updated = await update(id, proModif);
    console.log(updated);
    res.redirect('/productos')
}
const getUpdate = async(req,res)=>{
    const id = req.params.id;
    const producto = await single(id);
    res.render('modificarProducto', {producto})
}


router.get('/', all)
router.get('/eliminar/:id', borrar)
router.get('/create', (req,res)=>res.render("agregarProducto"))
router.post('/create', agregar);
router.get('/modificar/:id', getUpdate);
router.post('/modificar/:id', modificar)

module.exports = router;