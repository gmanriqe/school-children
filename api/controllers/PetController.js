/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    fnSearchAjax: (req, res) => {
        Pet
            .find({nombre: req.body.nombre})
            .then(function(data){
                res.json(data[0].nombre);
                // console.log(data[0].nombre+'controller');
            })
            .catch(function(err){
                console.log(err);
            })
    },

    fnListPet: (req, res) => {
        Pet
            .find({ sort: 'fecregistro DESC'})
            .then(function(regs){
                res.view('mascota/listpet',{regs:regs});
            })
            .catch(function(err){
                console.log(err);
            })
    },
    fnAddPet: (req, res) => res.view('mascota/register'),

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

    }
};

