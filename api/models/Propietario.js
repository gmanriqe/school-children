/**
* Propietario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'Propietario',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true,
    },
    nombre: {
      type: 'string',
      size: 150
    },
    direccion: {
      type: 'string',
      size: 80
    },
    numerodocumento: {
      type: 'integer'
    },
    telefono: 'integer',
    pets: {
      collection: 'Pet',
      via: 'propietario'
    },
    tipodoc: {
      model: 'Tipodocumento'
    }

  }
};

