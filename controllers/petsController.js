//add requirements
var express = require("express");
var db = require("../models");


//pets controller
module.exports = function (app) {
    //display pet information on main page
    app.get("/", function (req, res) {
        db.Pets.findAll({}).then(function(dbPets) {
            res.render("customer_results", {result:dbPets});
        });
    });

    
};