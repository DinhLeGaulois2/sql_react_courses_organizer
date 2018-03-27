module.exports = function (sequelize, Sequelize) {
    const Seat = sequelize.define("seat", {    
        number: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false,
        },
        position: {
            type: Sequelize.STRING
        },
    });

    return Seat;
}