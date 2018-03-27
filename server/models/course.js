module.exports = function (sequelize, Sequelize) {
    const Course = sequelize.define("course", {        
        number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },        
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
    });

    return Course;
}