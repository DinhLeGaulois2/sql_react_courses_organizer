const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {    
    app.get("/api/get/department/:id", (req, res) => {

    })
     
    app.get("/api/get/department/all", (req, res) => {

    })

    app.get("/api/get/course/:id", (req, res) => {

    })

    app.get("/api/get/course/all", (req, res) => {

    })

    app.get("/api/get/instructor/:id", (req, res) => {

    })

    app.get("/api/get/instructor/all", (req, res) => {

    })

    app.get("/api/get/student/:id", (req, res) => {

    })

    app.get("/api/get/student/all", (req, res) => {

    })
}