const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    ///////////////////////////////////////////////////////////////
    /////////////////// Need to use TRANSACTION ///////////////////
    ///////////////////////////////////////////////////////////////

    app.delete("/api/delete/department/:id", (req, res) => {

    })

    app.delete("/api/delete/course/:id", (req, res) => {

    })

    app.delete("/api/delete/instructor/:id", (req, res) => {

    })

    app.delete("/api/delete/student/:id", (req, res) => {

    })
}