"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(75),
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(10000),
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING(500),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      availability: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      hostedDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },

      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING(10000),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Spots");
  },
};
