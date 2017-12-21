/**
* Pet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

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
    fecregistro: {
      type: 'date'
    },
    historiasclinicas: {
      collection: 'Historiaclinica',
      via: 'pet' //campo por el que relacionas
    },
    citasspa: {
      collection: 'Citaspa',
      via: 'pet' //campo por el que relacionas
    },
    tipomascota: {
      model: 'Tipomascota'
    }
  }
};

