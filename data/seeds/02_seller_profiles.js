const faker = require('faker');

const profiles = [...new Array(5)].map(() => ({
  id: faker.random.alphaNumeric(20),
  avatarUrl: faker.image.avatar(),
  email: faker.internet.email(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  physical_address: faker.address.streetAddress(),
  phone_number: faker.phone.phoneNumber('string'),
  role: 2,
}));

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('profiles').insert([
    ...profiles,
    {
      id: '00ulthapbErVUwVJy4x6',
      name: 'SuperStore Rug Emporium',
      email: 'llama001@maildrop.cc',
      phone_number: '(555) 444-3333',
      physical_address: '100 Davidson Street, Maine',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
      role: 1,
      category: 'rugs',
      text_notification: false,
      email_notification: true,
    },

    {
      id: '00ultwew80Onb2vOT4x6',
      name: 'Nicholas Mullen',
      email: 'llama002@maildrop.cc',
      phone_number: '(555) 123-4567',
      physical_address: '35 Sampsonite Avenue, Lingdon Nevada, 22556',
      description:
        'Selling my personal Junk: Hawaiian shirts, mixed ammunition, unmatched fine china.',
      role: 1,
    },

    {
      id: '00ultx74kMUmEW8054x6',
      name: "Bezo's Enterprises",
      email: 'llama003@maildrop.cc',
      phone_number: '(555) 987-6543',
      physical_address: '1378 California Drive, California, 00012',
      description: 'Books, Rockets, Washington News Media',
      role: 1,
    },
  ]);
};
