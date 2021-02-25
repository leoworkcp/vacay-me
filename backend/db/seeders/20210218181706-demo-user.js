"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          isHost: false,
          profilePictureUrl:
            " https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "demouser@gmail.com",
          username: "Demo-User",
          hashedPassword: bcrypt.hashSync("Demouser123!@#"),
          isHost: true,
          profilePictureUrl:
            "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          isHost: false,
          profilePictureUrl:
            " https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          isHost: false,
          profilePictureUrl:
            "https://images.unsplash.com/photo-1529564041483-69e3675e43dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxwcm9maWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: {
          [Op.in]: ["Demo-lition", "Demo-User", "FakeUser1", "FakeUser2"],
        },
      },
      {}
    );
  },
};
