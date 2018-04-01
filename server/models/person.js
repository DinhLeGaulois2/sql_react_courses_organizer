module.exports = function (sequelize, Sequelize) {
    const Person = sequelize.define("person", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lastName: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        firstName: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        type: { // "instructor", "student"
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        hireDate: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        },
        enrollmentDate: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Person;
}