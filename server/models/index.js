'use strict';

// the Object from the library ...
var Sequelize = require('sequelize');

var db = {};

var DBInfo = {
    username: "root",
    password: "",   // <----------------- Your Password here
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

db.class = require('../models/class.js')(sequelize, Sequelize)
db.course = require('../models/course.js')(sequelize, Sequelize)
db.instructor = require('../models/instructor.js')(sequelize, Sequelize)
db.professor = require('../models/professor.js')(sequelize, Sequelize)
db.seat = require('../models/seat.js')(sequelize, Sequelize)
db.section = require('../models/section.js')(sequelize, Sequelize)
db.student = require('../models/student.js')(sequelize, Sequelize)
db.student_course = require('../models/student_course.js')(sequelize, Sequelize)

// n-m
db.student.hasMany(db.student_course)
db.student_course.belongsTo(db.student)
db.student_course.belongsTo(db.course)
db.course.hasMany(db.student_course)

db.course.hasMany(db.class)
db.class.belongsTo(db.course)
db.class.belongsTo(db.section)
db.section.hasMany(db.class)

// 1-n
db.course.belongsTo(db.instructor)
db.instructor.hasMany(db.course)

db.section.belongsTo(db.professor)
db.professor.hasMany(db.section)

// 1-1
db.seat.belongsTo(db.student)
db.student.hasOne(db.seat)