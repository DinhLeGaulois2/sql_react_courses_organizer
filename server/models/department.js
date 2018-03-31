module.exports = function (sequelize, Sequelize) {
    const Department = sequelize.define("department", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        budget: {
            type: Sequelize.INTEGER
        },
        startDate: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        },
        administrator: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Department;
}