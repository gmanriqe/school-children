/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 'Contacto',
    attributes: {
        id: {
            primaryKey: true,
            type: 'integer',
            autoIncrement: true,
            unique: true,
        },
        nombre: {
            type: 'string',
            size: 100
        },
        email: {
            type: 'string',
            size: 100
        },
        telcelular: {
            type: 'integer',
            size: 9
        },
        asunto: {
            type: 'string',
            size: 200
        }
    }
};

