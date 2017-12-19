/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    fnViewLogin: (req, res)=> res.view('usuario/login'),
    fnRegisterUsuario: (req, res)=> res.view('usuario/register'),
    
    fnFormUser:(req, res)=>{
       var usuario = {
           nombre:req.body.nombre,
           direccion:req.body.direccion,
           telefono:req.body.telefono,
           email:req.body.email,
           usuario:req.body.usuario,
           contrasena:req.body.contrasena
       }

       Usuario
            .create(usuario)
            .then((regs)=>{
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
                if(data.tipousuario == 'ad'){
                    res.view('usuario/viewadmin');
                }else {
                    res.view('usuario/viewadmin');
                }
                console.log(data);
            })
            .catch(function(err){
                console.log(err);
            })
    },
    fnListUser:(req,res)=>{
        Usuario
            .find()
            .then((datas)=>{
                console.log(datas);
                res.view('usuario/listusu',{datas:datas, layout: 'layout/layout-dashboard'}); 
            })
    },
    fnEditUser:(req,res)=>{
        var userData = req.params.id;
        Usuario
            .find(userData)
            .then((regs)=>{
                console.log(regs);
                res.view('editusu',{regs:regs[0]});
            })
    },
    fnFormUpdUsu:(req,res)=>{
       var filtro = { id :  req.params.id} 
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
            })
    }
};

