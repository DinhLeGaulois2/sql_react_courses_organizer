const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize

const db = require("../models");

module.exports = function (app) {
    app.post("/api/add/department", (req, res) => {
        const reqData = req.body
        db.department.findOrCreate({
            where: {
                name: reqData.name,
                budget: reqData.budget,
                startDate: reqData.startDate,
                administrator: reqData.administrator
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/course", (req, res) => {
        const reqData = req.body
        db.course.findOrCreate({
            where: {
                title: reqData.title,
                credits: reqData.credits,
                departmentId: reqData.dptId
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/instructor", (req, res) => {
        const reqData = req.body
        db.person.findOrCreate({
            where: {
                lastName: reqData.lastName,
                firstName: reqData.firstName,
                type: 'instructor',
                hireDate: reqData.hireDate,
                enrollmentDate: reqData.enrollmentDate
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/student", (req, res) => {
        const reqData = req.body
        db.person.findOrCreate({
            where: {
                lastName: reqData.lastName,
                firstName: reqData.firstName,
                type: 'student',
                hireDate: reqData.hireDate,
                enrollmentDate: reqData.enrollmentDate
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/course-instructor", (req, res) => { // Checked!
        const reqData = req.body

        return sequelize.transaction(t => {
            return db.person.findOne({
                where: { id: reqData.instructorId },
                attributes: ['id']
            }, { transaction: t }).then(data => {
                let insId = data.id
                return db.course.findOne({ 
                    where: { id: reqData.courseId },
                    attributes: ['id']
                 }, { transaction: t })
                    .then(data => {
                        return db.courseInstructor.findOrCreate({
                            where: {
                                courseId: data.id,
                                instructorId: insId
                            }
                        }) // No "{ transaction: t }" for the last action
                    })
            })
        }).then(data => { res.status(200).json(data) })
            .catch(err => res.status(400).json("Insertion Err: " + err))
    })

    app.post("/api/add/course-student", (req, res) => {
        const reqData = req.body        

        return sequelize.transaction(t => {
            return db.person.findOne({
                where: { id: reqData.studentId, type: 'student'}
            }, { transaction: t }).then(data => {
                return db.course.findOne({ where: { id: reqData.courseId } }, { transaction: t })
                    .then(data => {
                        return db.studentGrade.findOrCreate({
                            where: {
                                courseId: reqData.courseId,
                                studentId: reqData.studentId,
                                grade: ""
                            }
                        }) // No "{ transaction: t }" for the last action
                    })
            })
        }).then(data => { res.status(200).json(data) })
            .catch(err => res.status(400).json("Insertion Err: " + err))
    })

    app.post("/api/set/course/online", (req, res) => {
        db.course.findOne({ where: { id: req.body.courseId } })
            .then(data => {
                db.onlineCourse.findOrCreate({
                    where: {
                        courseId: req.body.courseId,
                        url: req.body.url
                    }
                }).then(data => res.status(200).json("Set Course as 'Online' Successfully!"))
                    .catch(err => res.status(400).json("Could not Set Course as 'Online', err: " + err))
            })
            .catch(err => res.status(400).json("Could not find a course with an ID of '" + req.body.courseId + "'"))
    })

    app.post("/api/set/course/onsite", (req, res) => {
        db.course.findOne({ where: { id: req.body.courseId } })
            .then(data => {
                db.onlineCourse.findOrCreate({
                    where: {
                        courseId: req.body.courseId,
                        location: req.body.location,
                        day: req.body.day,
                        time: req.body.time
                    }
                }).then(data => res.status(200).json("Set Course as 'Onsite' Successfully!"))
                    .catch(err => res.status(400).json("Could not Set Course as 'Onsite', err: " + err))
            })
            .catch(err => res.status(400).json("Could not find a course with an ID of '" + req.body.courseId + "'"))
    })
}