const Sequelize = require('sequelize');

const db = require("../models");

const infoACourse = (courseId) => {
    return db.course.findAll({
        where: { id: courseId },
        attributes: ['id', 'title'],
        include: [
            {
                model: db.department,
                attributes: ['id', 'name', 'administrator'],
            },
            {
                model: db.onsite,
                attributes: ['id', 'location', 'days', 'time']
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
            },
            {
                model: db.studentGrade,
                attributes: ['id', 'studendId']
            }
        ]
    })
}

module.exports = function (app) {
    app.get("/api/get/department/:id/", (req, res, next) => {
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
            .then(data => res.json(data))
            .catch(next)
    })

    app.get("/api/get/departments", (req, res, next) => {
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
            .catch(next)
    })

    app.get("/api/get/course/:id", (req, res, next) => {
        infoACourse(req.params.id)
            .then(data => {
                let d = data[0]
                // get all instructors (it could be more than one)
                let instructorsList = []
                for (let i = 0; i < d.courseInstructors.length; i++) {
                    instructorsList.push({
                        id: d.courseInstructors[i].id,
                        fName: d.courseInstructors[i].person.firstName,
                        lName: d.courseInstructors[i].person.lastName,
                    })
                }

                let result = {
                    courseId: d.id,
                    title: d.title,
                    department: d.department,
                    isOnsite: d.onsites.length == 0 ? false : true,
                    onsiteSchedule: d.onsites,
                    instructors: instructorsList,
                    students: d.studentGrades
                }
                res.status(200).json(result)
            })
            .catch(next)
    })


    app.get("/api/get/courses", (req, res, next) => {
        let result = [];
        db.course.findAll({ attributes: ['id'] })
            .then(data => {
                // get number of student - recursively - for each course
                const byCourse = (list) => {
                    if (list.length) {
                        infoACourse(list.shift().id).then(data => {
                            let aObj = data[0]
                            // get all instructors (it could be more than one)
                            let instructorsList = []
                            for (let i = 0; i < aObj.courseInstructors.length; i++) {
                                instructorsList.push({
                                    id: aObj.courseInstructors[i].id,
                                    fName: aObj.courseInstructors[i].person.firstName,
                                    lName: aObj.courseInstructors[i].person.lastName,
                                })
                            }

                            let objC = {
                                courseId: aObj.id,
                                title: aObj.title,
                                department: aObj.department,
                                isOnsite: aObj.onsites.length == 0 ? false : true,
                                onsiteSchedule: aObj.onsites,
                                instructors: instructorsList,
                                studentNum: aObj.studentGrades.length
                            }
                            result.push(objC)
                            byCourse(list)
                        }).catch(next)
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byCourse' above
                byCourse([...data]);
            })
            .catch(next)
    })

    app.get("/api/get/instructor/:id", (req, res, next) => {
        db.person.findAll({
            where: { id: req.params.id },
            attributes: ['id', 'firstName', 'lastName'],
            include: [{
                model: db.courseInstructor,
                attributes: ['courseId']
            }]
        }).then(data => {
            let objC = {
                instructorId: data[0].id,
                fname: data[0].firstName,
                lname: data[0].lastName
            }
            let cList = []
            const byCourse = (list) => {
                if (list.length) {
                    let o = list.shift();
                    infoACourse(o.courseId).then(data => {
                        console.log("courseId: " + o.courseId)
                        cList.push({
                            courseId: data[0].id,
                            title: data[0].title,
                            department: data[0].department,
                            isOnsite: data[0].onsites.length == 0 ? false : true,
                            onsiteSchedule: data[0].onsites,
                            studentNum: data[0].studentGrades.length
                        })
                        byCourse(list)
                    }).catch(next)
                }
                else {
                    objC.courses = cList;
                    res.status(200).json(objC)
                }
            } // function 'byCourse'
            // calling the function 'byCourse' above
            byCourse([...data[0].courseInstructors]);
        })
            .catch(next)
    })

    app.get("/api/get/instructors", (req, res, next) => {
        db.person.findAll({
            where: { type: 'instructor' },
            attributes: ['id', 'lastName', 'firstName'],
            include: [{
                model: db.courseInstructor,
                attributes: ['courseId']
            }]
        })
            .then(data => {
                let result = []
                const byInstructor = (list) => {
                    if (list.length) {
                        let aObj = list.shift()
                        let aInstr = {
                            id: aObj.id,
                            fName: aObj.firstName,
                            lName: aObj.lastName
                        }
                        let coursesList = []
                        // all courses giving by the instructor
                        const byCourse = (cList) => {
                            if (cList.length) {
                                let aC = cList.shift()
                                infoACourse(aC.courseId).then(data => {
                                    coursesList.push({
                                        courseId: data[0].id,
                                        title: data[0].title,
                                        department: data[0].department,
                                        isOnsite: data[0].onsites.length == 0 ? false : true,
                                        onsiteSchedule: data[0].onsites,
                                        studentNum: data[0].studentGrades.length
                                    })
                                    byCourse(cList)
                                }).catch(next)
                            }
                            else {
                                aInstr.courses = coursesList
                                result.push(aInstr)
                                byInstructor(list)
                            }
                        }
                        byCourse([...aObj.courseInstructors])
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byCourse' above
                byInstructor([...data]);

            })
            .catch(next)
    })

    app.get("/api/get/student/:id", (req, res, next) => {
        db.person.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'lastName', 'firstName'],
            include: [{
                model: db.studentGrade,
                attributes: ['courseId']
            }]
        })
            .then(data => {
                let student = {
                    id: data.id,
                    fName: data.firstName,
                    lastName: data.lastName
                }
                let coursesList = []
                const byCourse = (list) => {
                    if (list.length) {
                        let aC = list.shift()
                        infoACourse(aC.courseId).then(data => {
                            coursesList.push({
                                courseId: data[0].id,
                                title: data[0].title,
                                department: data[0].department,
                                instructor: {
                                    id: data[0].courseInstructors.id,
                                    fName: data[0].courseInstructors[0].person.firstName,
                                    lName: data[0].courseInstructors[0].person.lastName
                                },
                                isOnsite: data[0].onsites.length == 0 ? false : true,
                                studentNum: data[0].studentGrades.length
                            })
                            byCourse(list)
                        })
                    }
                    else {
                        student.courses = coursesList
                        res.status(200).json(student)
                    }
                }
                byCourse([...data.studentGrades])
            })
            .catch(next)
    })

    app.get("/api/get/students", (req, res, next) => {
        db.person.findAll({
            where: { type: 'student' },
            attributes: ['id', 'lastName', 'firstName'],
            include: [{
                model: db.studentGrade,
                attributes: ['courseId']
            }]
        })
            .then(data => {
                let result = []
                const byStudent = (list) => {
                    if (list.length) {
                        let aObj = list.shift()
                        let aStud = {
                            id: aObj.id,
                            fName: aObj.firstName,
                            lName: aObj.lastName
                        }
                        let coursesList = []
                        // all courses giving by the instructor
                        const byCourse = (cList) => {
                            if (cList.length) {
                                let aC = cList.shift()
                                infoACourse(aC.courseId).then(data => {
                                    coursesList.push({
                                        courseId: data[0].id,
                                        title: data[0].title,
                                        department: data[0].department,
                                        isOnsite: data[0].onsites.length == 0 ? false : true,
                                        onsiteSchedule: data[0].onsites,
                                        studentNum: data[0].studentGrades.length
                                    })
                                    byCourse(cList)
                                }).catch(next)
                            }
                            else {
                                aStud.courses = coursesList
                                result.push(aStud)
                                byStudent(list)
                            }
                        }
                        byCourse([...aObj.studentGrades])
                    }
                    else res.status(200).json(result)
                } // function 'byCourse'
                // calling the function 'byCourse' above
                byStudent([...data]);

            })
            .catch(next)
    })
}