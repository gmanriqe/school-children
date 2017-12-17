var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

//serializar
passport.serializeUser(function(user, done){
    done(null, user.id);
})
//deserializar
passport.deserializeUser(function(userId, done){
    Usuario
        .findOne({id: userId})
        .then(function(user){
            done(null, user);
        })
        .catch(function(err){
            done(err, false);
        })
})

passport.use(new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'contrasena'
},function(usuario, contraseña, done){

    Usuario
        .findOne({usuario:usuario})
        .then(function(user){
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            } else {
               return done(null, user, {message: "Bienvenido."});
            } 
                  
        })
        .catch(function(err){
            return done(err);
        })
}))