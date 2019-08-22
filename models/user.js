'use strict';

const Model = require('sequelize').Model;
const sequelize = require('../config/db');

const DataTypes = require('sequelize').DataTypes;

class User extends Model {

}

User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    totalScore: DataTypes.INTEGER
},{
    sequelize
});


module.exports = User;