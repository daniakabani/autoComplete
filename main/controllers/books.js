const db = require('../db/knex');

exports.jsonBooks = async (req, res) => {
    await db.select().from('books').then(books => {
        res.send(books);
    });
};