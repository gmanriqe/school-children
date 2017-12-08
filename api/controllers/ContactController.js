/**
 * ContactController
 *
 * @description :: Server-side logic for managing contacts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    
    fnFormContactanos:(req,res)=>{
        var data =  {
            nombre : req.body.nombre,
            email : req.body.email,
            telcelular : req.body.telcelular,
            asunto : req.body.asunto,
        }
        //llamada modulo nodemailer
        var  nodemailer = require('nodemailer');
        var smtpTransport = nodemailer.createTransport(
            {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // SSL
                auth:  {
                    user: 'gmanriqe@gmail.com',
                    pass: ''
                }
            }
        );
        var mailOptions = {
            from: data.nombre,
            to: 'gmanriqe@gmail.com',
            subject: 'Formulario de Productos',
            // text: 'Hola soy'+data.nombre+'y estoy interesado en el producto.'+data.asunto,
            html: '<img src="https://nodemailer.com/nm_logo_200x136.png">'+'</br>'+'<strong>Tenemos un nuevo mensaje de: </strong>'+data.nombre+'</br>'+'<h2>Mensaje: </h2>'+data.asunto+'</br>'
        }
        smtpTransport.sendMail(mailOptions, (error,respuesta)=>{
            if(error){
                console.log(error);
            }
            res.send('Mensaje Enviado');
        })
        Contact
            .create(data)
            .then((regs)=> {
                console.log(regs + 'regs');
                console.log(nodemailer+'nodemailer');
            })
    }
};

