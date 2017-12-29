/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  //CONTACTANOS
  'POST /contact': { controller: 'ContactController',action: 'fnFormContactanos' },

  //USUARIO
  'GET /login': { controller: 'UsuarioController', action: 'fnViewLogin' },
  'GET /register': { controller: 'UsuarioController', action: 'fnRegisterUsuario' },
  'POST /formuser': { controller: 'UsuarioController', action: 'fnFormUser' },
  'POST /formLoginUser': { controller: 'UsuarioController', action: 'fnFormLoginUser' },
  'GET /listaMedicosVeterinarios': { controller: 'UsuarioController', action: 'fnListaMedicoVeterinario' },
  'GET /editusu/:id': { controller: 'UsuarioController', action: 'fnEditUser' },

  'POST /formUpdUsu/:id' : { controller: 'UsuarioController', action: 'fnFormUpdUsu' },
  'GET /deletusu/:id': { controller: 'UsuarioController', action: 'fnDeleteUsuario' },

  //PET & TIPOMASCOTA
  'GET /listPet': { controller: 'PetController', action: 'fnListPet' },
  'GET /addPet': { controller: 'PetController', action: 'fnAddPet' },
  'POST /formregisterpet': { controller: 'PetController', action: 'formRegisterPet' },
  'GET /detallemascota/:id': { controller: 'PetController', action: 'detailpet' },
  'GET /pet/:id/edit': { controller: 'PetController', action: 'editpet' },
  'POST /pet/:id/update': { controller: 'PetController', action: 'updatepet' },
  'GET /pet/:id/delete': { controller: 'PetController', action: 'deletepet' },

  'GET /formtipomascota': { controller: 'PetController', action: 'formtipomascota' },
  'POST /insertartipomascota': { controller: 'PetController', action: 'insertartipomascota' },

  //SEARCH AJAX
  'POST /searchAjax': { controller: 'PetController', action: 'fnSearchPetNameAjax' },

  //HISTORIAL
  'GET /listHistoriaClinica': { controller: 'HistoriaclinicaController', action: 'fnListHistoriaClinica' },
  'GET /addHistorialClinico': { controller: 'HistoriaclinicaController', action: 'fnAddHistorialClinico' },
  'POST /formRegisterHistorial': { controller: 'HistoriaclinicaController', action: 'formRegisterHistorial' },
  
  'GET /historiaclinicadiaria': { controller: 'HistoriaclinicaController', action: 'fnListHistoriaClinicaDiaria' },
  // 'GET /redhistoriaclinicadiaria': { controller: 'HistoriaclinicaController', action: 'fnRedirect' },
  
  'GET /historiaclinita/:id': { controller: 'HistoriaclinicaController', action: 'onehistoriaclinita' },
  'POST /formhistoria/:id': { controller: 'HistoriaclinicaController', action: 'oneformhistoria' },

  //PROMOCION
  'GET /listRegisterPromo' : { controller: 'PromocionController', action: 'listRegisterPromo' },
  'GET /formAddRegisterPromo': { controller: 'PromocionController', action: 'formAddRegisterPromo' },
  'POST /formRegisterPromo': { controller: 'PromocionController', action: 'formRegisterPromo' },
  'GET /promocion/editar/:id' : { controller: 'PromocionController', action: 'editar' },
  'POST /promocion/actualizar/:id' : { controller: 'PromocionController', action: 'actualizar'},
  'GET /promocion/:id/eliminar': { controller: 'PromocionController', action: 'eliminarpromocion'},

   //CITE
   'GET /citasdeldia': { controller: 'CitaspaController', action: 'fnlistCite' },
   'GET /formcitaspa': { controller: 'CitaspaController', action: 'formcitaspa' },
   'GET /citaspa/:id/edit': { controller: 'CitaspaController', action: 'editcitaspa' },
   'POST /citaspa/:id/actualizar': { controller: 'CitaspaController', action: 'actualizarcitaspa' },
   'POST /insertarcita': { controller: 'CitaspaController', action: 'insertarcita' },

   //PROPIETARIOS
   'GET /listarpropietarios': { controller: 'PropietarioController', action: 'listarPropietarios' },
   'GET /formpropietarios': { controller: 'PropietarioController', action: 'formpropietarios' },
   'POST /insertarpropietario': { controller: 'PropietarioController', action: 'insertarpropietario' },
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
