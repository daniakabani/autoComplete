const db = require('../db/knex');

exports.jsonBooks = async (req, res) => {
    await db.select().from('books').then(books => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.send(books);
    });
};