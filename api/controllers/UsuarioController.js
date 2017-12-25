/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    fnViewLogin: (req, res)=> res.view('usuario/login'),
    fnRegisterUsuario: (req, res)=> res.view('usuario/register',{layout:'layout/layout-dashboard'}),
    
    fnFormUser:(req, res)=>{
       var usuario = {
           tipousuario: req.body.tipousuario,
           nombre: req.body.nombre,
           fecnacimiento: req.body.fecnacimiento,
           dni: req.body.dni,
           telefono: req.body.telefono,
           usuario: req.body.usuario,
           contrasena: req.body.contrasena,
           habilitado: req.body.habilitado
       }
       Usuario
            .create(usuario)
            .then((regs)=>{
                console.log(regs);
                res.redirect('/login');
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    fnFormLoginUser:(req,res)=>{
        Usuario
            .findOne({ usuario:req.body.usuario,contrasena:req.body.contrasena})

            .then(function(data){
                if(!data) return res.view('usuario/login', {error: 'Usuario o contraseña invalidos'});
                //corregir codigo ya que todos redireccionan a la misma vista
                if(data.tipousuario == 'ad' || data.tipousuario == 'em') return res.view('usuario/viewadmin',{layout: 'layout/layout-dashboard'});
                
            })
            .catch(function(err){
                console.log(err);
            })
    },
    fnListaMedicoVeterinario:(req,res)=>{
        Usuario
            .find()
            .where({ 
                'tipousuario':'ve'
                // 'habilitado':{"contains": 1}
            })
            .then((datas)=>{
                res.view('usuario/listusu',{datas:datas, layout: 'layout/layout-dashboard'}); 
            })
    },
    fnEditUser:(req,res)=>{
        var userData = req.params.id;
        Usuario
            .find(userData)
            .then((regs)=>{
                res.view('usuario/editusu',{regs:regs[0], layout: 'layout/layout-dashboard'});
            })
    },
    fnFormUpdUsu:(req,res)=>{
        var filtro = { id:req.params.id } 
        var campos = {      
            nombre:req.body.nombre,
            direccion:req.body.direccion,
            telefono:req.body.telefono,
            email:req.body.email,
            usuario:req.body.usuario,
            contrasena:req.body.contrasena
        }
        Usuario
            .update(filtro, campos)
            .then((regs)=>{
                // res.send({mensaje:"Municipio actualizado con éxito."});
                res.redirect('/listuser');
                // res.view('usuario/listusu',{datas:regs, layout: 'layout/layout-dashboard'}); 
            })
            .catch(function(err){
				res.negotiate(err);
			});
    },
    fnDeleteUsuario: (req, res) => {
        var id = {id:req.params.id}
        Usuario
            .destroy(id)
            .then((reg)=>{
                res.redirect('/listuser');
            })
    }
};

