module.exports = function (sequelize, Sequelize) {
    const OfficeAssignment = sequelize.define("officeAssignment", {
        // instructorId: {
        //     type: Sequelize.STRING,
        //     references: {
        //         model: 'people',
        //         key: 'id'
        //     }
        // },
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