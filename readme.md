#### To start the application at your local machine do the following:

1. Copy .env.example to .env in the same directory
2. Edit the .env file and add DB settings (MySQL db) and host variables
3. Install dependencies by running `npm run resolve`
4. Start the migration process by running `npm run migrate`
5. Run the seed to create core identities `npm run seed`
6. run the server using this command `npm start`
7. run the front end react&express server using the following command `cd client && npm start`
9. launch the app from the browser based on the desired host you specified from the `client package.json` file

#### NPM scripts:

1. `npm start` run the backend server locally
2. `npm run migrate` run knex migration to populate DB tables and changes
3. `npm run resolve` install the dependencies and nested ones with one command
4. `npm run seed` Run seed script to populate important DB records
5. `npm run rollback` Rollback the latest migration
5. `npm run reset` Rollback the latest migration, adds the latest ones, and seeds the books from the json file