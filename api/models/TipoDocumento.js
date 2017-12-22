/**
* TipoDocumento.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'Tipodocumento',
  attributes: {
    id: {
      primaryKey: true,
      type: 'integer',
      autoIncrement: true,
      unique: true
    },
    nombre: {
      type: 'string',
      size: 30
    },
    habilitado: 'boolean',
    propietarios: {
      collection: 'Propietario',
      via: 'tipodoc'
    }
  }
};

