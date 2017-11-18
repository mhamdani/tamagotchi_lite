// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var actions = {
  listAll: function(cb) {
    orm.listAll('actions', function(res) {
      cb(res);
    });
  },
  create: function(vals, cb) {
    orm.create("actions", 'description', vals, function(res) {
      cb(res);
    });
  },
  update: function(col, val, id, cb) {
    orm.updateById("actions", col, val, id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (tamagotchi_controller.js).
module.exports = actions;
