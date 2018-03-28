module.exports = function (sequelize, Sequelize) {
    const Course = sequelize.define("course", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        credits: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Course;
}