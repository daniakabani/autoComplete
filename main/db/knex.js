const config = require('../config/index');
const env = config.env.workEnv;
const dbConfig = require('../knexfile.js')[env];
const knex = require('knex')(dbConfig);

module.exports = knex;