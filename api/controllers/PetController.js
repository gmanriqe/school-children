/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    fnSearchPetNameAjax: (req, res) => {
        Pet
            .find({nombre: req.body.nombre})
            .populate('tipomascota')
            .then(function(data){
                res.json(data);
                // console.log(data[0].nombre+'controller');
            })
            .catch(function(err){
                console.log(err);
            })
    },
    fnListPet: (req, res) => {
        Pet
            .find({ sort: 'fecregistro DESC'})
            .populate('tipomascota')
            .then(function(regs){
                res.view('mascota/listpet',{regs:regs, layout: 'layout/layout-dashboard'});
            })
            .catch(function(err){
                console.log(err);
            })
    },
    fnAddPet: (req, res) => {
        TipoMascota
            .find()
            .then(function(regs){
                res.view('mascota/register', { regs:regs, layout: 'layout/layout-dashboard'})
            })
    },
    formRegisterPet: (req, res) => {
        var registroPet = {
            tipomascota: req.body.tipomascota,
            nombre: req.body.nombre,
            raza: req.body.raza,
            fecregistro: req.body.fecregistro
        }
        Pet
            .create(registroPet)
            .then(function(regs){
                res.redirect('/listPet');
            })
            .catch(function(err){
                console.log(err);
            })

    },
    detailpet: function(req, res){
        var id = { id:req.params.id }
        Pet
            .findOne(id)
            .populate('tipomascota')
            .then((reg)=>{
                console.log(reg)
                res.view('mascota/show', {reg:reg, layout: 'layout/layout-dashboard'})
            })
            .catch(function(err){
                console.log(err);
            })
    },
    editpet: (req, res) => {
        var id = {id:req.params.id}
        Pet.findOne(id).populate('tipomascota').exec(function(err, reg){
            TipoMascota.find().exec(function(err, pets){
                console.log(reg);
                console.log(pets);
                res.view('mascota/edit',{reg:reg, pets:pets, layout: 'layout/layout-dashboard'})
            })
        })
            // .then((reg)=> {
            //     console.log(reg);
            //     res.view('mascota/edit',{reg:reg, layout: 'layout/layout-dashboard'})
            // })
            // .catch(function(err){
            //     console.log(err);
            // })
    },
    updatepet: (req, res)=>{
        var filtro = {id:req.params.id}
        var data = {
            tipomascota: req.body.tipomascota,
            nombre: req.body.nombre,
            raza: req.body.raza,
        }
        Pet
            .update(filtro, data)
            .then((reg)=>{
                res.view('mascota/show',{reg:reg[0], layout: 'layout/layout-dashboard'});
            })
    },
    deletepet: function(req, res){
        var id = {id:req.params.id}
        Pet
            .destroy(id)
            .then(function(reg){
                console.log(reg);
                res.redirect('/listPet');
            })
    },

    //TipoMascota
    formtipomascota: function(req, res){
        res.view('mascota/tipomascota',{ layout: 'layout/layout-dashboard' });
    },
    insertartipomascota: function(req, res){
        var nombre = {nombre:req.body.nombre}
        TipoMascota
            .create(nombre)
            .then(function(reg){
                //falta ajustar
                console.log(reg);
            })
    }
};

