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
                    .catch(err => res.status(400).json(err))
            })
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
                .catch(err => res.status(400).json("Insertion Err: " + err))
        })
            .catch(err => res.status(400).json("Insertion Err: " + err))
    })

    app.post("/api/add/course-student", (req, res) => {
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
                    .catch(err => res.status(400).json(err))
                })
                .catch(err => res.status(400).json("Course: Not Found, err: " + err))
        })
            .catch(err => res.status(400).json("Student: Not Found, err: " + err))
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