"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          description: `Went here on a spontaneous weekend and I was incredibly happy with everything and more! It felt nice to get out of the city to have a spectacular view of the ocean from my bed!`,
          userId: 1,
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `Very clean place. Though our room is not beachfront it's not an issue as beach is very accessible from us. Location is near to the local restaurants and groceries. Will come back next summer.`,
          userId: 2,
          spotId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `The Wavecrest was great and in a perfect location! We went during the off season so a majority of the stores and restaurants were not open.`,
          userId: 3,
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: `We had a wonderful time. The room was spacious and the views were amazing. Highly recommend and we can’t wait to come back.`,
          userId: 2,
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
