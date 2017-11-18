// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var action = {
  all: function(cb) {
    orm.all("actions", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("actions", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, cb) {
    orm.update("actions", objColVals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (tamagotchi_controller.js).
module.exports = action;
