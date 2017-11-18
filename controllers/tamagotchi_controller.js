var express = require("express");
var router = express.Router();
var action = require("../models/tamagotchi.js");

// Create routes and set up logic within those routes
router.get("/", function(req, res) {
  action.all(function(data) {
    var hbsObject = {
      actions: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/actions", function(req, res) {
  action.create([
    "action_name", "completed"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/action/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  action.update({
    completed: req.body.complete
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
