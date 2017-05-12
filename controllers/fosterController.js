//requirements
var express = require("express");
var db = require("../models");

//controller for foster homes
module.exports = function(app) {

    //display foster home information on foster home page
    app.get("/foster_home/:id", function (req, res) {
        db.Foster.findAll({
            
        }).then(function(dbPets) {
            res.render("index", {result:dbPets});
        });
    });
};