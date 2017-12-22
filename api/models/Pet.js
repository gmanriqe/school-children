/**
* Pet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');
module.exports = {
  tableName: 'Pet',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true,
    },
    tipomascota: 'string',
    nombre: 'string',
    raza: 'string',
    sexo: {
      type: 'string',
      size: 6
    },
    fecregistro: {
      type: 'datetime',
      defaultsTo : moment().format("YYYY-MM-DD HH:mm:ss")
    },
    urlfoto: {
      type: 'string'
    },
    historiasclinicas: {
      collection: 'Historiaclinica',
      via: 'pet'
    },
    citasspa: {
      collection: 'Citaspa',
      via: 'pet'
    },
    tipomascota: {
      model: 'Tipomascota'
    },
    propietario: {
      model: 'Propietario'
    }
  }
};

