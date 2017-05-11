//add requirements
var express = require("express");
var db = require("../models");


//pets controller
module.exports = function (app) {
    //display pets data on main page
    app.get("/", function (req, res) {
        db.Pets.findAll({}).then(function(dbPets) {
            res.render("index", {result:dbPets});
        });
    });

    //display pets data searched for by user
    app.get("/", function (req, res) {
        db.Pets.findAll({
            where: {
                species: req.body.species,
                breed: req.body.breed,
                age: req.body.age,
                gender: req.body.gender
            }
        }).then(function(dbPets) {
            res.render("customer_results", {result:dbPets});
        });
    });

    



    
};