module.exports = function (sequelize, Sequelize) {
    const Person = sequelize.define("person", {
    });

    return Person;
}