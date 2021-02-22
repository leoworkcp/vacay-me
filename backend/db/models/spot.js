"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(75),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(10000),
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      availability: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      hostedDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },

      imageUrl: {
        allowNull: false,
        type: DataTypes.STRING(10000),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Spot.associate = function (models) {
    // associations can be defined here
    Spot.hasMany(models.Review, { foreignKey: "spotId" });
    // Spot.hasOne(models.Bookings, { foreignKey: "spotId" });
  };
  return Spot;
};
