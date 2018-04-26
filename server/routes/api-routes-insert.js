const Sequelize = require('sequelize');
const models = require('../models') // DB's models
var sequelize = models.sequelize

const db = require("../models");

module.exports = function (app) {
    app.post("/api/add/department", (req, res, next) => {
        const reqData = req.body
        db.department.findOrCreate({
            where: reqData
        }).then(data => res.status(200).json(data))
            .catch(next)
    })

    app.post("/api/add/course", (req, res, next) => {
        const reqData = req.body
        db.department.findOne({ where: { id: reqData.departmentId } })
            .then(data => {
                if (data == null) res.status(400).json("Department Doesn't Exist!")
                db.course.findOrCreate({
                    where: {
                        title: reqData.title,
                        credits: reqData.credits,
                        departmentId: reqData.departmentId
                    }
                }).then(data => res.status(200).json(data))
                    .catch(next)
            })
            .catch(next)
    })

    app.post("/api/add/instructor", (req, res, next) => {
        const reqData = req.body
        db.person.findOrCreate({
            where: reqData
        }).then(data => res.status(200).json(data))
            .catch(next)
    })

    app.post("/api/add/student", (req, res, next) => {
        const reqData = req.body
        db.person.findOrCreate({
            where: reqData
        }).then(data => res.status(200).json(data))
            .catch(next)
    })

    app.post("/api/add/course-instructor", (req, res, next) => { // Checked!
        const reqData = req.body

        db.person.findOne({
            where: { id: reqData.instructorId },
            attributes: ['id']
        }).then(data => {
            if (data == null) res.status(400).json("Instructor: Not Found!")
            let insId = data.id
            return db.course.findOne({
                where: { id: reqData.courseId },
                attributes: ['id']
            })
                .then(data => {
                    if (data == null) res.status(400).json("Course: Not Found!")
                    return db.courseInstructor.findOrCreate({
                        where: {
                            courseId: data.id,
                            instructorId: insId
                        }
                    }) // No "{ transaction: t }" for the last action
                })
                .catch(next)
        })
            .catch(next)
    })

    app.post("/api/add/course-student", (req, res, next) => {
        const reqData = req.body

        db.person.findOne({
            where: { id: reqData.studentId }
        }).then(data => {
            if (data == null) res.status(400).json("Student: Not Found!")
            let studId = data.id
            db.course.findOne({ where: { id: reqData.courseId } })
                .then(data => {
                    if (data == null) res.status(400).json("Course: Not Found!")
                    db.studentGrade.findOrCreate({
                        where: {
                            courseId: data.id,
                            studentId: studId,
                            grade: ""
                        }
                    }) // No "{ transaction: t }" for the last action
                        .then(data => res.status(100).json("Insertion Successfully!"))
                        .catch(next)
                })
                .catch(next)
        })
            .catch(next)
    })

    app.post("/api/set/course/online", (req, res, next) => {
        db.course.findOne({ where: { id: req.body.courseId } })
            .then(data => {
                db.onlineCourse.findOrCreate({
                    where: {
                        courseId: req.body.courseId,
                        url: req.body.url
                    }
                }).then(data => res.status(200).json("Set Course as 'Online' Successfully!"))
                    .catch(next)
            })
            .catch(next)
    })

    app.post("/api/set/course/onsite", (req, res, next) => {
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
                    .catch(next)
            })
            .catch(next)
    })
}