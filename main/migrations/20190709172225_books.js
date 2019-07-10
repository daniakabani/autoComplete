exports.up = function (knex) {
    return knex.schema.createTable('books', (table) => {
        table.increments('id').primary();
        table.string('name', 200).notNullable();
        table.string('author', 150).notNullable();
        table.string('series', 150);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('books');
};
