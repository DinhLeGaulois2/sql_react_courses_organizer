'use strict';

var conf = require('../../MY_PRIVATE_FOLDER/config_params')

// the Object from the library ...
var Sequelize = require('sequelize');

var db = {};

var DBInfo = {
    username: "root",
    password: conf.db_pwd,   // <----------------- Your Password here
    database: "courses_organizer",
    host: "127.0.0.1",
    dialect: "mysql",
};

var sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
    host: DBInfo.host,
    dialect: DBInfo.dialect,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
});

db.sequelize = sequelize; // the library
db.Sequelize = Sequelize;

db.course = require('../models/course.js')(sequelize, Sequelize);
db.courseInstructor = require('../models/courseInstructor.js')(sequelize, Sequelize);
db.department = require('../models/department.js')(sequelize, Sequelize);
db.online = require('../models/online.js')(sequelize, Sequelize);
db.onsite = require('../models/onsite.js')(sequelize, Sequelize);
db.person = require('../models/person.js')(sequelize, Sequelize);
db.studentGrade = require('../models/studentGrade.js')(sequelize, Sequelize);

// n-m
db.person.hasMany(db.courseInstructor, {foreignKey: 'instructorId'});
db.courseInstructor.belongsTo(db.person, {foreignKey: 'instructorId'});

db.courseInstructor.belongsTo(db.course);
db.course.hasMany(db.courseInstructor);

db.person.hasMany(db.studentGrade, {foreignKey: 'studendId'});
db.studentGrade.belongsTo(db.person, {foreignKey: 'studendId'});

db.studentGrade.belongsTo(db.course);
db.course.hasMany(db.studentGrade);

// 1-n
db.course.belongsTo(db.department);
db.department.hasMany(db.course);

// 1-1
db.course.hasMany(db.onsite);
db.onsite.belongsTo(db.course);

db.course.hasOne(db.online);
db.online.belongsTo(db.course);

module.exports = db;