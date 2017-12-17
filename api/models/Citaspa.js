/**
* Citaspa.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');
module.exports = {
  tableName: 'Citaspa',
  attributes: {
    id: {
      primaryKey: true,
      type: 'integer',
      autoIncrement: true,
      unique: true,
    },
    fecregistro: {
      type: 'datetime',
      defaultsTo : moment().format("YYYY-MM-DD HH:mm:ss")
    },
    horavisita: 'string',
    horarecojo: {
      type: 'string',
      defaultsTo: 'no especificado'
    },
    pet: {
      model: 'Pet'
    },
    promocion: {
      model: 'Promocion'
    }
  }
};

