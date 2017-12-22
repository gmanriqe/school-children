/**
 * PropietarioController
 *
 * @description :: Server-side logic for managing propietarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    listarPropietarios: function(req, res) {
        Propietario
            .find()
            .then(function(regs){
                res.view('propietarios/listapropietarios',{regs:regs, layout: 'layout/layout-dashboard'})
            })
    },
    formpropietarios: (req, res) => {
        TipoDocumento
            .find()
            .where({
                'habilitado': 1
            })
            .then((tds)=> {
                res.view('propietarios/register', {tds:tds, layout: 'layout/layout-dashboard'});
            })
            .catch((err)=> {
                console.log(err);
            })
    },
    insertarpropietario: (req, res) => {
       var data = {
        nombre:req.body.nombre,
        direccion:req.body.direccion,
        telefono:req.body.telefono,
        tipodoc:req.body.tipodoc,
        numerodocumento:req.body.numerodocumento }
        console.log(data);
        Propietario
            .create(data)
            .then((reg) => {
                res.redirect('/addPet');
            })
    }
};

