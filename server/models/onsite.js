module.exports = function (sequelize, Sequelize) {
    const Onsite = sequelize.define("onsite", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        location: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },        
        days: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        },        
        time: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Onsite;
}