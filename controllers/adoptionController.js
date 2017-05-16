//requirements
var express = require("express");
var db = require("../models");

//controller for potential adopters
module.exports = function(app) {

    //display pets data on main page
    app.get("/", function(req, res) {
        db.Pets.findAll({}).then(function(dbPets) {
            res.render("index", { result: dbPets });
        });
    });

    //display pets data searched for by user
    app.post("/find", function(req, res) {
        console.log("request", req.body);
        db.Pets.findAll({
            where: {
                species: req.body.animalType,
                age: req.body.animalAge,
                gender: req.body.animalGender,
                temper: req.body.animalTemp
            }
        }).then(function(dbPets) {
            res.render("customer_results", { result: dbPets });
        });
    });

    app.get("/find", function(req, res) {

        res.render("customer_results");
    });

    //display pet information of a specific foster home to foster home admin page
    app.get("/admin", function(req, res) {
        db.Pets.findAll({
            where: {
                id: req.params.id //not sure this is right
            }
        })
    });
};