const dotEnv = require('dotenv');
dotEnv.config();

const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    port: `${process.env.DB_PORT}`,
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Connected')
}).catch(error => console.log('Failed to connect: ', error));

module.exports = sequelize;