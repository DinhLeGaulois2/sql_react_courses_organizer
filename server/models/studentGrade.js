module.exports = function (sequelize, Sequelize) {
    const StudentGrade = sequelize.define("studentGrade", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        enrollmentId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        grade: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return StudentGrade;
}