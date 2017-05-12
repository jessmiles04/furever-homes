//requirements
var express = require("express");
var db = require("../models");

//controller for potential adopters
module.exports = function(app) {

    //display pets data on main page
    app.get("/", function (req, res) {
        db.Pets.findAll({}).then(function(dbPets) {
            res.render("index", {result:dbPets});
        });
    });

    //display pets data searched for by user
    app.get("/find", function (req, res) {
        db.Pets.findAll({
            where: {
                species: req.body.species,
                age: req.body.age,
                gender: req.body.gender,
                temperament: req.body.temperament
            }
        }).then(function(dbPets) {
            res.render("customer_results", {result:dbPets});
        });
    });

    //display pet information of a specific foster home to foster home admin page
    app.get("/admin", function (req,res) {
        db.Pets.findAll({
            where: {
                //needs to join tables by foster home ID
            };
        });
    });
};