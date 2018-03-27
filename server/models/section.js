module.exports = function (sequelize, Sequelize) {
    const Section = sequelize.define("section", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    });

    return Section;
}