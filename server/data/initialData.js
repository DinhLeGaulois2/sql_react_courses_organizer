const Sequelize = require('sequelize');
const db = require("../models");

const dataLists = require("./dataLists.js");

var letInitiate = () => {
    db.department.findAll()
        .then(data => {
            if (data.length==0) { // the database is empty!!!!
                db.department.bulkCreate(dataLists.dpt)
                    .then(data => {
                        db.course.bulkCreate(dataLists.course)
                            .then(data => {
                                db.person.bulkCreate(dataLists.peopleNames)
                                    .then(data => { console.log("Initiation: Success!") })
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