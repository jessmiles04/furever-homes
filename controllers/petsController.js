var express = require("express");
var router = express.Router();
// Routes
// =============================================================

  router.get("/signup", function(req, res) {
      var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
      return res.render("signup", hbsObject);
   });

   router.get("/login", function(req, res) {
      var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
      return res.render("login", hbsObject);
   });


router.get("/index", function(req, res) {
      var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
      return res.render("index", hbsObject);
   });

router.get("/search", function(req, res) {
      var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
      return res.render("customer_results", hbsObject);
   });

router.get("/contact", function(req, res) {
      var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
      return res.render("foster_home_details", hbsObject);
   });

  router.post("/api/new", function(req, res) {

    console.log("data", req.body);

  });

module.exports = router;