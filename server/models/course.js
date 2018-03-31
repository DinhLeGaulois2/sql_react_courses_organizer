module.exports = function (sequelize, Sequelize) {
    const Course = sequelize.define("course", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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