/**
* Historiaclinica.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');
module.exports = {
  tableName: 'Historiaclinica',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true,
    },
    motivoconsulta: 'string',
    fecatencion: {
      type: 'datetime',
      defaultsTo : moment().format("YYYY-MM-DD HH:mm:ss")
    },
    receta: 'string',
    precioconsulta: {
      type: 'float',
    },
    pet: {
      model: 'Pet'
    }
  }
};

