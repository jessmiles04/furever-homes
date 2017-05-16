//requirements
var express = require("express");
var db = require("../models");
var router = express.Router();
var bcrypt = require("bcrypt");


//controller for foster homes
module.exports = function(app) {

    //display signup page
    router.get("/signup", function(req, res) {
        var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
        return res.render("signup", hbsObject);
    });

   //display login page
    //router.get("/login", function(req, res) {
        var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
        return res.render("login", hbsObject);
    });

    //display index page
    router.get("/index", function(req, res) {
        var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
        return res.render("index", hbsObject);
    });

    //display customer results
    router.get("/search", function(req, res) {
        var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
        return res.render("customer_results", hbsObject);
    });

    //display contact page
    router.get("/contact", function(req, res) {
        var hbsObject = {BadPassword: true, baderror: "Incorrect Password"};
        return res.render("foster_home_details", hbsObject);
    });

    //display foster home information on foster home page
    app.get("/foster_home/:id", function (req, res) {
        db.Foster.findAll({

            where: {
                id: req.params.id
            }
        }).then(function(dbPets) {
            res.render("index", {result:dbPets});
        });
    });


    //add new foster home information
    app.post("/add_foster_home", function (req, res) {
        var saltRounds = 10;
        var hash = bcrypt.hashSync(req.body.password, saltRounds);
        console.log(hash);
        db.Foster.Create({
            username: req.body.username,
            password: hash,
            fosterHome: req.body.fosterHome,
            fosterParents: req.body.fosterParents,
            address: req.body.address,
            county: req.body.county,
            contact: req.body.contact,
            email: req.body.email,
            hours: req.body.hours,
            website: req.body.website
        }).then(function(dbFoster) {
            res.redirect("/admin");
        }).catch(function (error) {
            console.log(error.message);
            res.status(500).json({error: error.message});
        });
    });


};

app.post("/signin", function(req, res){
    db.Foster.findOne({
        username: req.body.username
    })
    .then(function(foster){
        if (!foster) {
            console.log("User not found");
            res.status(400).json({
                'status' : 'Invalid Username or Password'
            })
        }else {
            bcrypt.compare(req.body.password, foster.password, function(err, res){
                if (err || !valid) {
                    res.status(400).json({
                          'status' : 'Invalid Username or Password'
                    });
            res.status(200).json({
                id: foster.id,
                username: foster.username
            });
        }
    });
})