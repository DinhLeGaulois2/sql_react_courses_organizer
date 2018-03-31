const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.post("/api/add/department", (req, res) => {
        db.department.fineOne({
            where: { name: req.body.name }
        }).then(data => {
            //KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
            console.log("add/department, data: " + JSON.stringify(data, null, 5))
        })
    })

    app.post("/api/add/course", (req, res) => {

    })

    app.post("/api/add/instructor", (req, res) => {

    })

    app.post("/api/add/student", (req, res) => {

    })
}