const books = require('../../books.json');


exports.seed = async (knex, Promise) => {
  // Deletes ALL existing entries
  await knex('books').del();
  // Inserts seed entries
  await knex('books').insert(books);
};