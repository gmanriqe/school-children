/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');
module.exports = {

  tableName: 'Usuario',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true,
    },
    nombre: {
      type: 'string',
      size: '100'
    },
    direccion: {
      type: 'string',
      size: '100'
    },
    telefono: 'integer',
    email: 'email',
    avatar: {
      type: 'string',
      defaultsTo: 'http://transparency.org.tt/wp/wp-content/uploads/2016/12/default-avatar.png'
    },
    fecregistro: {
      type: 'datetime',
      defaultsTo : moment().format("YYYY-MM-DD HH:mm:ss")
    },
    tipousuario: {
      type: 'string',
      size: '2',
      defaultsTo: 'em'
    },
    activo: {
      type: 'boolean',
      defaultsTo: '1'
    },
    usuario: {
      type: 'string',
    },
    contrasena : {
      type: 'string'
    }

  }
};

