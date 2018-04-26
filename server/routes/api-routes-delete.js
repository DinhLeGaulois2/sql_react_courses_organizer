const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize

const db = require("../models");

module.exports = function (app) {
    ///////////////////////////////////////////////////////////////
    /////////////////// Need to use TRANSACTION ///////////////////
    ///////////////////////////////////////////////////////////////
    app.delete("/api/delete/department/:id", (req, res, next) => {
        db.course.findAll({ where: { departmentId: req.params.id } })
            .then(data => {
                if (data == null)
                    db.department.destroy({ where: { id: req.params.id } })
                        .then(data => res.status(200).json("Delation Successful!"))
                else res.status(400).json("Department is not Empty")
            })
            .catch(next)
    })

    app.delete("/api/delete/course/:id", (req, res, next) => {
        return sequelize.transaction(t => {
            return db.online.destroy({
                where: { courseId: req.params.id }
            }, { transaction: t }).then(data => {
                return db.onsite.destroy({ where: { courseId: req.params.id } }, { transaction: t })
                    .then(data => {
                        return db.courseInstructor.destroy({ where: { courseId: req.params.id } }, { transaction: t })
                            .then(data => {
                                return db.studentGrade.destroy({ where: { courseId: req.params.id } }, { transaction: t })
                                    .then(data => {
                                        return db.course.destroy({
                                            where: { id: req.params.id }
                                        }) // No "{ transaction: t }" for the last action
                                    })
                            })
                    })
            })
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(next)
    })

    app.delete("/api/delete/instructor/:id", (req, res, next) => {// We need to use TRANSACTION to delete 3 documents in 3 tables
        return sequelize.transaction(t => {
            return db.courseInstructor.destroy({
                where: { instructorId: req.params.id }
            }, { transaction: t })
                .then(data => { // all courses that the instructor is teaching have been destroyed successfully
                    return db.person.destroy({ where: { id: req.params.id } })
                })
        }).then(data => { res.status(200).json(data) })
            .catch(next)
    })

    app.delete("/api/delete/student/:id", (req, res, next) => {
        return sequelize.transaction(t => {
            return db.studentGrade.destroy({
                where: { studentId: req.params.id }
            }, { transaction: t })
                .then(data => { // all courses that the instructor is teaching have been destroyed successfully
                    return db.person.destroy({ where: { id: req.params.id } })
                })
        }).then(data => { res.status(200).json(data) })
            .catch(next)
    })
}