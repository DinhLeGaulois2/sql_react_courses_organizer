const Sequelize = require('sequelize');

const db = require("../models");

module.exports = function (app) {
    app.put("/api/put/department/", (req, res) => {
        db.department.findAll({ where: { id: req.body.id } })
            .then(data => {
                if (data == null)
                    res.status(400).json("The Department with the id of '" + req.body.id + "' could not be fould!")
                else {
                    let obj2Update = {}
                    if (req.body.budget != "undefined") obj2Update.budget = req.body.budget
                    if (req.body.name != "undefined") obj2Update.name = req.body.name
                    if (req.body.administrator != "undefined") obj2Update.administrator = req.body.administrator

                    db.department.update(obj2Update, { where: { id: req.body.id } })
                        .then(data => res.status(200).json(data))
                        .catch(err => res.status(400).json(err))
                }
            })
            .catch(err => res.status(400).json(err))
    })

    app.put("/api/put/student-grade", (req, res) => {
        db.studentGrade.update(
            {
                grade: req.body.grade
            }, {
                where: {
                    courseId: req.body.courseId,
                    studentId: req.body.studentId,
                }
            })
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err))
    })
}