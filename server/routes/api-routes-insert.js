const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.post("/api/add/department", (req, res) => {
        const dpt = req.body
        db.department.findOrCreate({
            where: {
                name: dpt.name,
                budget: dpt.budget,
                startDate: dpt.startDate,
                administrator: dpt.administrator
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/course", (req, res) => {
        const dpt = req.body
        db.course.findOrCreate({
            where: {
                title: dpt.title,
                credits: dpt.credits,
                dptId: dpt.dptId
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/instructor", (req, res) => {
        const dpt = req.body
        db.person.findOrCreate({
            where: {
                lastName: dpt.lastName,
                firstName: dpt.firstName,
                type: 'instructor',
                hireDate: dpt.hireDate,
                enrollmentDate: dpt.enrollmentDate
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/student", (req, res) => {
        const dpt = req.body
        db.person.findOrCreate({
            where: {
                lastName: dpt.lastName,
                firstName: dpt.firstName,
                type: 'student',
                hireDate: dpt.hireDate,
                enrollmentDate: dpt.enrollmentDate
            }
        }).then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/course-instructor", (req, res) => {
        const dpt = req.body
        db.person.findOne({ where: { id: dpt.instructorId }
        }).then(data => {
            if(data==null) res.status(400).json("Could not find an instructor with an ID of '" + dpt.instructorId + "'")
            else{
                db.course.findOne({ where: { id: dpt.courseId }})
                .then(data => {
                    db.courseIntructor.findOrCreate({ where: {
                        courseId: dpt.courseId,
                        personId: dpt.instructorId
                    }}).then(data => res.status(200).json("Insertion Successfully!"))
                    .catch(err => res.status(400).json("Could not insert course-instructor, err: " + err))
                })
                .catch(err => res.status(400).json("Could not find a course with an ID of '" + dpt.courseId + "'"))
            }
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/add/course-student", (req, res) => {
        const dpt = req.body
        db.person.findOne({ where: { id: dpt.studentId }
        }).then(data => {
            if(data==null) res.status(400).json("Could not find a student with an ID of '" + dpt.studentId + "'")
            else{
                db.course.findOne({ where: { id: dpt.courseId }})
                .then(data => {
                    db.courseIntructor.findOrCreate({ where: {
                        courseId: dpt.courseId,
                        personId: dpt.studentId,
                        grade: ""
                    }}).then(data => res.status(200).json("Insertion Successfully!"))
                    .catch(err => res.status(400).json("Could not insert course-student, err: " + err))
                })
                .catch(err => res.status(400).json("Could not find a course with an ID of '" + dpt.courseId + "'"))
            }
            res.status(200).json(data)
        })
            .catch(err => res.status(400).json(err))
    })

    app.post("/api/set/course/online", (req, res) => {
        db.course.findOne({ where: { id: req.body.courseId }})
        .then(data => {
            db.onlineCourse.findOrCreate({ where: {
                courseId: req.body.courseId,
                url: req.body.url
            }}).then(data => res.status(200).json("Set Course as 'Online' Successfully!"))
            .catch(err => res.status(400).json("Could not Set Course as 'Online', err: " + err))
        })
        .catch(err => res.status(400).json("Could not find a course with an ID of '" + dpt.courseId + "'"))
    })

    app.post("/api/set/course/onsite", (req, res) => {
        db.course.findOne({ where: { id: req.body.courseId }})
        .then(data => {
            db.onlineCourse.findOrCreate({ where: {
                courseId: req.body.courseId,
                location: req.body.location,
                day: req.body.day,
                time: req.body.time
            }}).then(data => res.status(200).json("Set Course as 'Onsite' Successfully!"))
            .catch(err => res.status(400).json("Could not Set Course as 'Onsite', err: " + err))
        })
        .catch(err => res.status(400).json("Could not find a course with an ID of '" + dpt.courseId + "'"))
    })
}