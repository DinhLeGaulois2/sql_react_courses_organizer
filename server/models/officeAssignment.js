module.exports = function (sequelize, Sequelize) {
    const OfficeAssignment = sequelize.define("officeAssignment", {
        location: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },
        timestamp: {
            type: Sequelize.TIME,
            validate: {
                notEmpty: true,
            }
        }
    });

    return OfficeAssignment;
}