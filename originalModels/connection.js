const { Sequelize } = require('sequelize');

module.exports = {
  sequelize: () => {
    return new Sequelize('cebackend', 'merico', 'merico', {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432,
      pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  },
  test: async ()=>{
    try {
      await module.exports.sequelize().authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

