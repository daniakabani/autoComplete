const config = require('../config');
const env = config.env.workEnv;
const dbConfig = require('../knexfile')[env];
const knex = require('knex')(dbConfig);

module.exports = knex;