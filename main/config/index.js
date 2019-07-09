require('dotenv').config({ path: '../../.env' }); // environement config file 


module.exports = {
    db: {
        client: process.env.DATABASE_CLIENT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        dbName: process.env.DATABASE_NAME,
        dbHost: process.env.DATABASE_HOST,
        dbMaxPool: process.env.DATABASE_MAX_POOL,
        dbMinPool: process.env.DATABASE_MIN_POOL
    },
    env: {
        workEnv: process.env.DEVELOPMENT_ENVIRONMENT
    }
};