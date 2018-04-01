const Sequelize = require('sequelize');

const Op = Sequelize.Op;

const db = require("../models");

module.exports = function (app) {
    app.put("/api/put/department", (req, res) => {
        db.department.findOne({ where: { id: req.body.id } })
            .then(data => {
                if (data == null)
                    res.status(400).json("The Department with the id of '" + req.body.id + "' could not be fould!")
                else {
                    db.department.update({
                        budget: req.body.budget,
                        administrator: req.body.administrator
                    }, {
                            where: {
                                id: req.body.id,
                                returning: true,
                                plain: true
                            }
                        }).then(data => res.status(200).json("Update Successfully!"))
                        .catch(err => res.status(400).json(err))
                }
            })
    })

    app.put("/api/put/student-grade", (req, res) => {
        db.studentGrade.update({
            courseId: req.body.courseId,
            studentId: req.body.studentId,
            grade: req.body.grade
        })
    })
}