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
            .populate('propietario')
            .then(function(data){
                console.log(data);
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
        TipoMascota.find().exec(function(err, regs){
                if(err) return console.log(err)
                Propietario.find().exec(function(err, props){
                    if(err) return console.log(err)
                    res.view('mascota/register', { regs:regs,props:props, layout: 'layout/layout-dashboard'})
                })
            })
    },
    formRegisterPet: (req, res) => {
        var registroPet = {
            propietario: req.body.propietario,
            tipomascota: req.body.tipomascota,
            nombre: req.body.nombre,
            raza: req.body.raza,
            sexo: req.body.sexo
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
                res.view('mascota/show', {reg:reg, layout: 'layout/layout-dashboard'})
            })
            .catch(function(err){
                console.log(err);
            })
    },
    editpet: (req, res) => {
        var id = {id:req.params.id}
        Pet.findOne(id).populate('tipomascota').populate('propietario').exec(function(err, reg){
            if(err) return console.log(err);
            TipoMascota.find().exec(function(err, pets){
                if(err) return console.log(err);
                console.log(reg);
                console.log(pets);
                res.view('mascota/edit',{reg:reg, pets:pets, layout: 'layout/layout-dashboard'})
            })
        })
    },
    updatepet: (req, res)=>{
        var filtro = {id:req.params.id}
        var data = {
            tipomascota: req.body.tipomascota,
            nombre: req.body.nombre,
            raza: req.body.raza,
            sexo: req.body.sexo
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

