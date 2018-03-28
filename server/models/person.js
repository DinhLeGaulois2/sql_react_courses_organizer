module.exports = function (sequelize, Sequelize) {
    const Person = sequelize.define("person", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        lastName: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        firstName: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        hireDate: {
            type: Sequelize.DATE,
            validate: {
                notEmpty: true,
            }
        },
        enrollmentDate: {
            type: Sequelize.DATE,
            primaryKey: true
        }
    });

    return Person;
}