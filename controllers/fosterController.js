//requirements
var express = require("express");
var db = require("../models");

//controller for foster homes
module.exports = function(app) {

<<<<<<< HEAD
    //display foster home information on foster home page

    app.get("/login", function(req, res) {
=======
    app.get("/login", function (req, res) {
>>>>>>> 9da5e215c4d5fe36480bc247949443bec5a2e7b9
        res.render("login");
    })

    app.get("/signup", function(req, res) {
        res.render("signup");
    })

    app.get("/foster_home/:id", function(req, res) {
        db.fosterHome.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbPets) {
            res.render("index", { result: dbPets });
        });
    });


    //add new foster home information
    app.post("/add_foster_home", function(req, res) {
        db.Foster.Create({
            fosterHome: req.body.fosterHome,
            fosterParents: req.body.fosterParents,
            address: req.body.address,
            county: req.body.county,
            contact: req.body.contact,
            email: req.body.email,
            hours: req.body.hours,
            website: req.body.website,
            image: req.body.image,
            active: true
        }).then(function(dbFoster) {
            res.redirect("/admin");
        }).catch(function(error) {
            console.log(error.message);
            res.status(500).json({ error: error.message });
        });
    });


};