//requirements
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
            }
        })
    })

    //post pet information to the database from the admin screen
    app.post("/add_pet", function (req, res) {
        db.Pets.create({
            name: req.body.name,
            species: req.body.species,
            breed: req.body.breed,
            age: req.body.age,
            gender: req.body.gender,
            temperament: req.body.temperament,
            description: req.body.description
        }).then(function(dbPets) {
            res.redirect("/admin")
        }).catch(function (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        });
    });

    //edit pet information from admin page

};