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
                res.view('historial/listhistorial',{regs:regs, layout: 'layout/layout-dashboard'});
            })
            .catch(function(err){
                res.negociate(err);
            })
    },
    
    fnAddHistorialClinico: function(req, res){
        Pet
            .find()
            .then(function(regs){
                res.view('historial/formhistorial', {regs:regs, layout: 'layout/layout-dashboard'});
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

    },
    fnListHistoriaClinicaDiaria: (req, res) => {
        var horaDelDia = new Date();
        var nuevaHoraDelDia = horaDelDia.getFullYear()+'-'+ (horaDelDia.getMonth()+1)+'-'+ horaDelDia.getDate();
        Historiaclinica
            .find()
            .where({
                'fecatencion': {'like': nuevaHoraDelDia+'%'}
            })
            .populate('pet')
            .exec(function cb(err, regs){
                console.log(regs);
                if(err) return 
                res.view('historial/listhistorialdia', { regs:regs, layout: 'layout/layout-dashboard' });
            })

    },




    onehistoriaclinita: (req, res) => {
        var id = {id:req.params.id}
        Pet
            .findOne(id)
            .then((regs)=> {
                Usuario //usuario medico-veterinario
                    .find()
                    .where({
                        'tipousuario':'ve',
                        'habilitado':{"contains": 1}
                    })
                    
                    .then((uservets)=> { 
                    console.log(uservets);
                    console.log(regs);
                    
                        res.view('historial/unahistoriaclinica',{regs:regs, uservets:uservets, layout: 'layout/layout-dashboard'}) ;
                    })
                    .catch((err)=> {
                        console.log(err);
                    })
            })
            .catch((err)=> {
                console.log(err);
            })
    },




    oneformhistoria: (req, res) => {
        var id = req.params.id;
        var veterinario = req.body.veterinario;
        var data = {
            pet:req.params.id,
            motivoconsulta: req.body.motivoconsulta,
            receta: req.body.receta,
            precioconsulta: req.body.precioconsulta,
        }

        Historiaclinica
            .create(data)
            .then((regs)=> {
                Historiaclinica
                    .find()
                    .sort('createdAt DESC')
                    .limit('1')
                    .then((dats)=> {
                        var getIdLast = dats[0].id;
                        HistoriaDetalle
                            .create({ veterinario:veterinario, historiaclinica:getIdLast})
                            .then((regsDetails)=>{
                                console.log(regsDetails);
                                res.redirect('/detallemascota/'+id);
                            })
                            .catch((err)=> res.negociate(err));   
                    })
                    .catch((err)=> res.negociate(err));
            })
            .catch((err)=> res.negociate(err));

        // Historiaclinica.create(data).exec(function (err, reg){
        //     if (err) { return res.serverError(err); }

        //     sails.sockets.getId(reg);
        //     sails.log('Registro con id:', reg.id);
        //     return res.ok();
        //     });
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

