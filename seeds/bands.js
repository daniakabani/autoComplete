
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {id: 1, name: 'Metallica'},
        {id: 2, name: 'Iron Maiden'},
        {id: 3, name: 'ACDC'}
      ]);
    });
};
