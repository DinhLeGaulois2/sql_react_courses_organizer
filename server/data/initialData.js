const Sequelize = require('sequelize');
const db = require("../models");

const courseInstructor = require("./courseInstructor.js");
const courses = require("./courses.js");
const dpt = require("./dpt.js");
const online = require("./online.js");
const onsite = require("./onsite.js");
const peopleNames = require("./peopleNames.js");
const studentGrade = require("./studentGrade.js");

let letInitiate = () => {
    // We could use Sequelize 'transaction' to avoid to build some 'table' but not some other. However, 
    //    (only for development purpose only) by using this (dump) way, we could get error's message
    //    corresponding to the 'table' that had problem, it's easier to see the errors ...
    db.department.findAll()
        .then(data => {
            if (data.length == 0) { // the database is empty!!!!
                db.department.bulkCreate(dpt)
                    .then(data => {
                        db.course.bulkCreate(courses)
                            .then(data => {
                                db.person.bulkCreate(peopleNames)
                                    .then(data => {
                                        db.onsite.bulkCreate(onsite)
                                            .then(data => {
                                                db.online.bulkCreate(online)
                                                    .then(data => {
                                                        db.studentGrade.bulkCreate(studentGrade)
                                                            .then(data =>
                                                                console.log("Initiation: Success!"))
                                                            .catch(err => console.log("Could not initiate 'studentGrade', err: " + err))
                                                    })
                                                    .catch(err => console.log("Could not initiate 'online'"))
                                            })
                                            .catch(err => console.log("Could not initiate 'onsite'"))
                                    })
                                    .catch(err => { console.log("Could not do initiation for 'people'") })

                            })
                            .catch(err => console.log("Could not initiate the 'courses', err: " + err))
                    })
                    .catch(err => console.log("Could not initiate the 'department', err: " + err))
            }
            else console.log("No Need to Initiate! It Was Done Before! " + JSON.stringify(data, null, 5))
        })
};

module.exports = letInitiate;