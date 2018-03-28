module.exports = function (sequelize, Sequelize) {
    const Online = sequelize.define("online", {
        url: {
            type: Sequelize.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    return Online;
}