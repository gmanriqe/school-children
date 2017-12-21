/**
 * CitaspaController
 *
 * @description :: Server-side logic for managing citaspas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	fnlistCite: function(req, res){
        Citaspa
            .find()
            .populate('pet')
            .populate('promocion')
            .then(function(regs){
                console.log(regs);
                res.view('cita/listcitaspa', { datas:regs, layout: 'layout/layout-dashboard'});
            })
    },
    formcitaspa: function(req, res){
        Pet.find().exec(function(err, pets){
            if(err) return res.negotiate(err);
            Promocion.find().where({ 'habilitado': 1}).exec(function(err, proms){   
                console.log(proms);
                console.log(pets);
                res.view('cita/register',{proms:proms, pets:pets, layout: 'layout/layout-dashboard'});
            })
        })
    },
    editcitaspa: (req, res) => {
        //filtrar solamente las promociones activas --- corregir
        Promocion.find().where({'habilitado':1}).exec(function cb(err, proms){
            console.log(proms);
            if(err) return res.negotiate(err);
            Citaspa.findOne({id:req.params.id}).populate('pet').populate('promocion').exec(function cb(err, regs){
                if(err) return console.log(err);
                console.log(regs);
                res.view('cita/editcitaspa', {proms:proms, regs:regs, layout: 'layout/layout-dashboard'});
            })
        })
    },
    actualizarcitaspa: (req, res) => {
        //falta implementar el actualizar
        var filtro = {id:req.params.id}
        var data = {
            horarecojo:req.body.horarecojo,
            pet:req.body.pet,
            promocion:req.body.promocion
        }
        Citaspa
            .update(filtro, data)
            .then(function(reg){
                res.redirect('citasdeldia');
            })
            .catch(function(err){
                console.log(err);
            })
    },
    insertarcita: (req, res) => {
        var data = {
            horavisita:req.body.horavisita,
            pet:req.body.pet,
            promocion:req.body.promocion,
        }
        Citaspa
            .create(data)
            .then(function(reg){
                console.log(reg);
            })
    }

};

