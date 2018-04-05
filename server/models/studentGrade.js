module.exports = function (sequelize, Sequelize) {
    const StudentGrade = sequelize.define("studentGrade", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        grade: {
            type: Sequelize.STRING
        }
    });

    return StudentGrade;
}