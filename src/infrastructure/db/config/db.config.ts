// import { Sequelize, Dialect } from "sequelize";
// export default {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "admin",
//     DB: "bakery_db",
//     dialect: "mysql" as Dialect,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000,
//     },
// };

// PORT = 8000;
// DB_HOST = "localhost";
// DB_DRIVER = "mysql";
// DB_NAME = "onion_db";
// DB_USER = "root";
// DB_PASSWORD = "admin";
// NODE_ENV = "development";


import { Dialect, Sequelize } from 'sequelize'
// TODO Set up process.env variables!!!!!!!!!!!!!!!
// const dbName = process.env.DB_NAME as string
const dbName = "onion_db";
// const dbUser = process.env.DB_USER as string
const dbUser = "root";
// const dbHost = process.env.DB_HOST
const dbHost = "localhost";
// const dbDriver = process.env.DB_DRIVER as Dialect
const dbDriver = "mysql";
// const dbPassword = process.env.DB_PASSWORD
const dbPassword = "admin";
const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
  // dialect: "mysql"

})

export default sequelizeConnection