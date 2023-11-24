const { Sequelize } = require('sequelize');
const defineModels = require('../db/models/index')

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: '127.0.0.1',
    port: '5433',
    username: 'postgres',
    'password': 'victormanuel20001411',
    'database': 'events-api-web2',
    dialect: 'postgres'
});

defineModels( sequelize )

sequelize.sync()

module.exports = sequelize