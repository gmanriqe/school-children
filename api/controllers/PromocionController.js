/**
 * PromocionController
 *
 * @description :: Server-side logic for managing promocions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    listRegisterPromo: (req, res) => {
        Promocion
            .find({
                // habilitado: true
            })
            .then(function(regs){
                console.log(regs);
                res.view('promociones/listpromo',{regs:regs});
            })
    },
    formAddRegisterPromo: function(req, res){
        res.view('promociones/formpromo');

    },
	formRegisterPromo: function(req, res){
        var dataPromo = {
            nombrepromocion: req.body.nombrepromocion,
            descripcion: req.body.descripcion,
            feccaducidad: req.body.feccaducidad,
            price: req.body.price,
        }
        Promocion
            .create(dataPromo)
            .then(function(){
                res.redirect('/listRegisterPromo');
            })
            .catch(function(err){
                console.log(err);
            })
    },
    formRegisterPromo: function(req, res){
        Promocion
            .findOne({id: req.params.id})
            .then(function(regs){
                console.log('update data');
                console.log(regs);
                res.view('promociones/editpromo',{regs:regs});
            })
            .catch(function(err){
                console.log(err);
            })
    }

};

