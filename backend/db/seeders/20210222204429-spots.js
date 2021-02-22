"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          title: "Cozy studio in East Village",
          description:
            "Cute studio in East Village (6th St. and Avenue A) on second floor (no elevator). Dishwasher in unit. Washer & dryer in building. Street-facing w/ fire escape. Building has backyard you can use. Within minutes walking distance of restaurants, bars, coffee shops, and shopping. Street parking in the area. 10 minute walk to L, M, F, J trains. 15 minute walk to Union Sq. Bus system is also easily accessible in this area Perfect for solo adventurers, couples, or business travelers. No pets. No cigs.",
          location: "East 6th Street & Avenue A, Manhattan, New York, NY",
          price: "66.99",
          availability: true,
          hostedDate: new Date("2021-01-26"),
          imageUrl:
            "https://a0.muscache.com/im/pictures/6ffc3850-19f9-4298-b497-2101428dc845.jpg?im_w=960",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ocean Front Resort Private decks Pool & Beach",
          description:
            "The sun, the sand, and the surf meet at the Wavecrest Resort to offer a magical holiday to our guests. Wake up to the sound of rolling surf and witness the spectacular sunrise. Head out for a morning walk on the beach, go beach combing or surf casting & Beach BonFires to end the day... the choice is all yours.",
          location: "Wavecrest Resort, Old Montauk Highway, Montauk, NY",
          price: "200.99",
          availability: true,
          hostedDate: new Date("2021-01-14"),
          imageUrl:
            "https://a0.muscache.com/im/pictures/921bb84b-5fdf-48ca-baa4-4e55377b31b1.jpg?im_w=960,https://a0.muscache.com/im/pictures/8225dbc8-41c0-4968-8623-fb3c38cec6fa.jpg?im_w=720,https://a0.muscache.com/im/pictures/e697daae-e04f-48d2-a381-df3ac3f68fc2.jpg?im_w=720,https://a0.muscache.com/im/pictures/97c006f5-d5a9-47c6-849f-2bc9b1863b9b.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
