const config = require('./config');

module.exports = {

  development: {
    client: config.db.client,
    connection: {
      host: config.db.dbHost,
      database: config.db.dbName,
      user: config.db.username,
      password: config.db.password
    },
    pool: {
      min: Number(config.db.dbMinPool) || 2,
      max: Number(config.db.dbMinPool) || 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
