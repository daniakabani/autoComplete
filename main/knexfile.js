require('dotenv').config({ path: '../.env'});

module.exports = {

  development: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      host: process.env.host,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD
    },
    seeds:{
      directory: '../seeds'
    },
    pool: {
      min: Number(process.env.MIN_POOL) || 2,
      max: Number(process.env.MAX_POOL) || 10
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
