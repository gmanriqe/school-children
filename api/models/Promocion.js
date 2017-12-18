/**
* Promocion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var moment = require('moment');
module.exports = {
  tableName: 'Promocion',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true
    },
    nombrepromocion: 'string',
    descripcion: 'string',
    feccreacion: {
      type: 'date',
      defaultsTo : moment().format("YYYY-MM-DD")
    },
    // feccaducidad: {
    //   type: 'date'
    // },
    price: 'float',
    citaspa: {
      collection: 'Citaspa',
      via: 'promocion' //campo por el que relacionas
    },
    habilitado: {
      type: "boolean",
      defaultsTo: true
    }
  }
};

