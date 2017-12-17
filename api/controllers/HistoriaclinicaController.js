/**
 * HistoriaclinicaController
 *
 * @description :: Server-side logic for managing historiaclinicas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    fnListHistoriaClinica: function(req, res){
        Historiaclinica
            .find({sort: 'fecatencion DESC'})
            .populate('pet')
            .then(function(regs){
                console.log(regs);
                res.view('historial/listhistorial',{regs:regs});
            })
            .catch(function(err){
                res.negociate(err);
            })
    },
    
    fnAddHistorialClinico: function(req, res){
        Pet
            .find()
            .then(function(regs){
                res.view('historial/formhistorial', {regs:regs});
            })
            .catch(function(err){
                console.log(err);
            })
    },

    formRegisterHistorial: function(req, res){
        var dataHist = {
            motivoconsulta: req.body.motivoconsulta,
            receta: req.body.receta,
            pet: req.body.pet,
            precioconsulta: req.body.precioconsulta
        }
        Historiaclinica
            .create(dataHist)
            .then(function(){
                res.redirect('/listHistoriaClinica');
            })
            .catch(function(err){
                console.log(err);
            })

    }


    // find: function(req, res){
    //     Historiaclinica
    //         .find({sort: 'fecatencion DESC'})
    //         .then(function(regs){
    //             res.view('historial/listhistorial',{regs:regs});
    //         })
    //         .catch(function(err){
    //             console.log(err);
    //         })
    // }



};
