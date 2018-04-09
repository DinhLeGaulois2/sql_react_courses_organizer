const Sequelize = require('sequelize');

const db = require("../models");

module.exports = function (app) {
    app.get("/api/get/department/:id/", (req, res) => {
        db.department.findAll({
            where: { id: req.params.id },
            attributes: ['id', 'name', 'administrator'],
            include: [{
                model: db.course,
                attributes: ['id', 'title'],
                include: [
                    {
                        model: db.onsite,
                        attributes: ['courseId']
                    },
                    {
                        model: db.online,
                        attributes: ['courseId']
                    }
                ]
            }]
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/departments", (req, res) => {
        db.department.findAll({
            attributes: ['id', 'name', 'administrator'],
            include: [{
                model: db.course,
                attributes: ['id', 'title'],
                include: [
                    {
                        model: db.onsite,
                        attributes: ['courseId']
                    },
                    {
                        model: db.online,
                        attributes: ['courseId']
                    }
                ]
            }]
        })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/course/:id", (req, res) => {
        db.course.findAll({
            where: { id: req.params.id },
            attributes: ['id', 'title'],
            include: [
                {
                    model: db.department,
                    attributes: ['id', 'name', 'administrator'],
                },
                {
                    model: db.onsite,
                    attributes: ['id']
                },
                {
                    model: db.online,
                    attributes: ['id']
                },
                {
                    model: db.courseInstructor,
                    attributes: ['id'],
                    include: [{
                        model: db.person,
                        attributes: ['firstName', 'lastName']
                    }]
                }
            ]
        })
            .then(data => {
                let obj = {
                    course: data[0]
                }
                db.studentGrade.findAll({
                    where: { courseId: req.params.id }, attributes: [[sequelize.fn('count',
                        sequelize.col('id')), 'studentNumber']]
                })
                    .then(data => {
                        obj.studentNumber = data[0]
                        res.status(200).json(obj)
                    }).catch(err => res.status(400).json("Could not get the number of Student, err: " + err))
            })
            .catch(err => res.status(400).json(err))
    })


    app.get("/api/get/courses", (req, res) => {
        let result = [];
        db.course.findAll({
            attributes: ['id', 'title'],
            include: [
                {
                    model: db.department,
                    attributes: ['id', 'name', 'administrator'],
                },
                {
                    model: db.onsite,
                    attributes: ['id']
                },
                {
                    model: db.online,
                    attributes: ['id']
                },
                {
                    model: db.courseInstructor,
                    attributes: ['id'],
                    include: [{
                        model: db.person,
                        attributes: ['firstName', 'lastName']
                    }]
                }
            ]
        })
            .then(data => {
                // get number of student - recursively - for each course
                const byCourse = (list) => {
                    if (list.length) {
                        let aObj = list.shift()
                        let objC = {
                            course: aObj
                        }

                        db.studentGrade.findAll({
                            where: { courseId: aObj.id }, attributes: [[sequelize.fn('count',
                                sequelize.col('id')), 'studentNumber']]
                        })
                            .then(data => {
                                objC.studentNumber = data[0];
                                result.push(objC)
                                byCourse(list)
                            })
                            .catch(err => res.status(400).json("Error with 'studentGrade', err: " + err))
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byCourse' above
                byCourse([...data]);
            })
            .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/instructor/:id", (req, res) => {
        db.person.findAll({
            where: { id: req.params.id },
            attributes: ['firstName', 'lastName'],
            include: [
                {
                    model: db.courseInstructor,
                    attributes: ['courseId'],
                    include: [
                        {
                            model: db.course,
                            attributes: ['id', 'title', 'departmentId'],
                            include: [
                                {
                                    model: db.online,
                                    attributes: ['id']
                                },
                                {
                                    model: db.onsite,
                                    attributes: ['id']
                                },
                                {
                                    model: db.department,
                                    attributes: ['id', 'name']
                                },
                            ]
                        }
                    ]
                }
            ]
        })
            .then(data => {
                let temp_courses = data[0].courseInstructors
                let result = {
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                    courses: []
                }
                const byCourse = (list) => {
                    if (list.length) {
                        let aObj = list.shift()
                        let objC = {
                            courseId: aObj.course.id,
                            title: aObj.course.title,
                            isOnline: aObj.course.online == null ? false : true,
                            department: {
                                id: aObj.course.department.id,
                                name: aObj.course.department.name
                            }
                        }
                        db.studentGrade.findAll({
                            where: { courseId: aObj.course.id }, attributes: [[sequelize.fn('count',
                                sequelize.col('id')), 'studentNumber']]
                        })
                            .then(data => {
                                objC.studentNumber = data[0];
                                result.courses.push(objC)
                                byCourse(list)
                            })
                            .catch(err => res.status(400).json("Error with 'studentGrade', err: " + err))
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byCourse' above
                byCourse([...temp_courses]);
            })
            .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/instructors", (req, res) => {
        db.person.findAll({ where: { type: 'instructor' }, attributes: ['id', 'lastName', 'firstName'] })
            .then(data => {
                let result = []
                const byCourse = (list) => {
                    if (list.length) {
                        let aObj = list.shift()
                        let objC = {
                            instructorId: aObj.id,
                            firstName: aObj.firstName,
                            lastName: aObj.lastName,
                        }
                        db.courseInstructor.findAll({
                            where: { instructorId: objC.instructorId },
                            attributes: ["courseId"],
                            include: [
                                {
                                    model: db.course,
                                    attributes: ["id", 'title'],
                                    include: [
                                        {
                                            model: db.department,
                                            attributes: ['id', 'name']
                                        },
                                        {
                                            model: db.onsite,
                                            attributes: ['id']
                                        },
                                        {
                                            model: db.online,
                                            attributes: ['id']
                                        },
                                        {
                                            model: db.studentGrade,
                                            attributes: ['id']
                                        }
                                    ]
                                }
                            ]
                        })
                            .then(data => {
                                let o = data[0]
                                objC.course = {
                                    id: o.course.courseId,
                                    title: o.course.title,
                                    department: {
                                        id: o.course.department.id,
                                        name: o.course.department.name
                                    },
                                    isOnline: o.course.online == null ? false : true,
                                    studentNum: o.course.studentGrades.length
                                }
                                result.push(objC)
                                byCourse(list)
                            })
                            .catch(err => res.status(400).json("Could not find 'courseInstructor', err: " + err))
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byCourse' above
                byCourse([...data]);



            })
            .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/student/:id", (req, res) => {
        db.person.findOne({ where: { id: req.params.id } })
            .then(data => {
                let objC = { // student's infos
                    studentId: data.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    course: []
                }
                db.studentGrade.findAll({
                    where: { studendId: objC.studentId },
                    attributes: ['id', 'courseId', 'grade'],
                    include: [
                        {
                            model: db.course,
                            attributes: ["id", 'title', 'departmentId'],
                            include: [
                                {
                                    model: db.department,
                                    attributes: ['id', 'name']
                                },
                                {
                                    model: db.onsite,
                                    attributes: ['id']
                                },
                                {
                                    model: db.online,
                                    attributes: ['id']
                                },
                                {
                                    model: db.courseInstructor,
                                    attributes: ['instructorId'],
                                    include: [
                                        {
                                            model: db.person,
                                            attritutes: ['id', 'firstName', 'lastName']
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                })
                    .then(data => {
                        for (let i = 0; i < data.length; i++) {
                            let tempo = data[i]
                            objC.course.push({
                                id: tempo.courseId,
                                grade: tempo.grade,
                                title: tempo.course.title,
                                department: {
                                    id: tempo.course.department.id,
                                    name: tempo.course.department.name
                                },
                                isOnline: (tempo.course.online == null) ? false : true,
                            })
                        }
                        res.status(200).json(objC)
                    })
                    .catch(err => res.status(400).json(err))
            })
            .catch(err => res.status(400).json(err))
    })

    app.get("/api/get/students", (req, res) => {
        db.person.findAll({ where: { type: 'student' }, attributes: ['id', 'lastName', 'firstName'] })
            .then(data => {
                let result = []
                const byStudent = (list) => {
                    if (list.length) {
                        let aObj = list.shift()
                        let objC = { // student's infos
                            studentId: aObj.id,
                            firstName: aObj.firstName,
                            lastName: aObj.lastName,
                            course: []
                        }
                        db.studentGrade.findAll({
                            where: { studendId: objC.studentId },
                            attributes: ['id', 'courseId', 'grade'],
                            include: [
                                {
                                    model: db.course,
                                    attributes: ["id", 'title', 'departmentId'],
                                    include: [
                                        {
                                            model: db.department,
                                            attributes: ['id', 'name']
                                        },
                                        {
                                            model: db.onsite,
                                            attributes: ['id']
                                        },
                                        {
                                            model: db.online,
                                            attributes: ['id']
                                        },
                                        {
                                            model: db.courseInstructor,
                                            attributes: ['instructorId'],
                                            include: [
                                                {
                                                    model: db.person,
                                                    attritutes: ['id', 'firstName', 'lastName']
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        })
                            .then(data => {
                                // all informations of all courses
                                for (let i = 0; i < data.length; i++) {
                                    let tempo = data[i]
                                    objC.course.push({
                                        id: tempo.courseId,
                                        grade: tempo.grade,
                                        title: tempo.course.title,
                                        department: {
                                            id: tempo.course.department.id,
                                            name: tempo.course.department.name
                                        },
                                        isOnline: (tempo.course.online == null) ? false : true,
                                    })
                                }
                                result.push(objC)
                                byStudent(list)
                            })
                            .catch(err => res.status(400).json("Could not find 'courseInstructor', err: " + err))
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byStudent' above
                byStudent([...data]);
            })
            .catch(err => res.status(400).json(err))
    })
}