const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.get("/api/get/department/:id", (req, res) => {
        db.department.findOne({ where: { id: req.body.id } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/department/all", (req, res) => {
        db.department.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/course/:id", (req, res) => {
        db.course.findOne({ where: { id: req.body.id } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/course/all", (req, res) => {
        db.course.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/instructor/:id", (req, res) => {
        db.person.findOne({ where: { id: req.body.id } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/instructor/all", (req, res) => {
        db.person.findAll({ where: { type: 'instructor' } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/student/:id", (req, res) => {
        db.person.findOne({ where: { id: req.body.id } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/student/all", (req, res) => {
        db.person.findAll({ where: { type: 'student' } })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err))
    })
}