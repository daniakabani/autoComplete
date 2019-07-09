
exports.up = (knex) => {
    return knex.schema.createTable('bands', table => {
        table.increments('id').primary();
        table.string('name', 65).notNullable();
        table.timestamp('created_at');
        table.timestamp('updated_at');
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable('bands');
};
