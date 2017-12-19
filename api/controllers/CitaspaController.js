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
                res.view('cita/citaspa', { datas:regs, layout: 'layout/layout-dashboard'});
            })
    },
    editcitaspa: (req, res) => {
        Promocion.find().exec(function cb(err, proms){
            if(err) return res.negotiate(err);
            Citaspa.findOne({id:req.params.id}).populate('pet').populate('promocion').exec(function cb(err, regs){
                console.log(proms);
                console.log(regs);
                res.view('cita/editcitaspa', {regs:regs, proms:proms, layout: 'layout/layout-dashboard'});
            })
        })
    }

};

