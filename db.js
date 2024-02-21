const { Sequelize } = require('sequelize')
const dbName = require("./config.json").Database;
const dbUser = require("./config.json").Username;
const dbPwd = require("./config.json").Password;
const dbHost = require("./config.json").Hostname;
// database
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // User
  process.env.DB_PWD, // Password
  {
    host: process.env.DB_HOST, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
