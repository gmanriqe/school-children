/**
* HistoriaDetalle.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');
module.exports = {
  tableName: 'HistoriaDetalle',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true,
    },
    fecatencion: {
      type: 'datetime',
      defaultsTo : moment().format("YYYY-MM-DD HH:mm:ss")
    },
    historiaclinica: {
      model: 'Historiaclinica'
    },
    veterinario: {
      model: 'Usuario'
    }
  }
};

