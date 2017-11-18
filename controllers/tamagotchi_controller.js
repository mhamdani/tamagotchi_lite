var express = require("express");
var router = express.Router();
var actions = require("../models/tamagotchi.js");

// Create routes and set up logic within those routes
router.get("/", function(req, res) {
  actions.listAll(function(data) {
    var hbsObject = {
      actions: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/actions/:id", function(req, res) {
  var id = req.params.id;
  var column = req.body.column;
  var value = req.body.value;

  res.status(200).end();
  console.log(req.body);

  actions.update(column, value, id, function(result) {
    if(result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.post("/api/actions", function(req, res) {
  actions.create(req.body.value, function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;
