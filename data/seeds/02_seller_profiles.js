const faker = require('faker');
const { development } = require('../../config/knexfile');
const env = process.env.NODE_ENV || 'development';

const profiles = [...new Array(5)].map((i) => ({
  id: faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: faker.internet.email(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('profiles').insert([
    ...profiles,
    {
      id: '00ulthapbErVUwVJy4x6',
      seller_name: 'SuperStore Rug Emporium',
      email_address: 'llama001@maildrop.cc',
      phone_number: '(555) 444-3333',
      physical_address: '100 Davidson Street, Maine',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
    },

    {
      id: '00ultwew80Onb2vOT4x6',
      seller_name: 'Nicholas Mullen',
      email_address: 'llama002@maildrop.cc',
      phone_number: '(555) 123-4567',
      physical_address: '35 Sampsonite Avenue, Lingdon Nevada, 22556',
      description:
        'Selling my personal Junk: Hawaiian shirts, mixed ammunition, unmatched fine china.',
    },

    {
      id: '00ultx74kMUmEW8054x6',
      seller_name: "Bezo's Enterprises",
      email_address: 'llama003@maildrop.cc',
      phone_number: '(555) 987-6543',
      physical_address: '1378 California Drive, California, 00012',
      description: 'Books, Rockets, Washington News Media',
    },
  ]);
};
