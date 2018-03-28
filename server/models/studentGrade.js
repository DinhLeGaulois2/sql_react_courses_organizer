module.exports = function (sequelize, Sequelize) {
    const StudentGrade = sequelize.define("studentGrade", {
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