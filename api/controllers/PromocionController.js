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
                // console.log(regs);
                res.view('promociones/listpromo',{regs:regs, layout: 'layout/layout-dashboard', messages: req.flash('info')});
            })
    },
    formAddRegisterPromo: function(req, res){
        res.view('promociones/forminsertpromo',{layout: 'layout/layout-dashboard'});

    },
	formRegisterPromo: function(req, res){
        var dataPromo = {
            nombrepromocion: req.body.nombrepromocion,
            descripcion: req.body.descripcion,
            price: req.body.price,
            habilitado: req.body.habilitado
        }
        console.log(dataPromo);
        Promocion
            .create(dataPromo)
            .then(function(){
                res.redirect('/listRegisterPromo');
            })
            .catch(function(err){
                console.log(err);
            })
    },
    editar: function(req, res){
        Promocion
            .findOne({id:req.params.id})
            .then(function(regs){
                res.view('promociones/editpromo',{regs:regs, layout: 'layout/layout-dashboard'});
            })
    },
    actualizar: function(req, res){
        var filtro = {id:req.params.id}
        var campos = {
            nombrepromocion: req.body.nombrepromocion,
            descripcion: req.body.descripcion,
            price: req.body.price,
            habilitado: req.body.habilitado=='true'?1:0
        }

        Promocion
            .update(filtro, campos)
            .then(function(regs){
                req.flash('info', 'Se modifico el dato correctamente. Flash!')
                // res.view('promociones/listpromo',{regs:regs, messages: req.flash('info') });
                res.redirect('/listRegisterPromo');
            })
            console.log(campos);
    }
};

