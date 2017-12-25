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
      size: 100
    },
    fecnacimiento: {
      type: 'datetime'
    },
    fecregistro: {
      type: 'datetime',
      defaultsTo : moment().format("YYYY-MM-DD HH:mm:ss")
    },
    dni: {
      type: 'integer'
    },
    habilitado: {
      type: 'boolean',
      defaultsTo: true
    },
    tipousuario: {
      type: 'string',
      size: 2,
      defaultsTo: 'em'
    },
    direccion: {
      type: 'string',
      size: 100
    },
    telefono: 'integer',
    email: 'email',
    avatar: {
      type: 'string'
    },
    usuario: {
      type: 'string'
    },
    contrasena : {
      type: 'string'
    },
    historiadetalles : {
      collection: 'HistoriaDetalle',
      via: 'veterinario'
    }

  }
};

