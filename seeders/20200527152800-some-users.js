"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          email: "mr.robak@email.com",
          password:
            "$2b$10$Qb8xApRHugnmWA0St3PI2O.h33lcVLU5Yfijtrvz/sHnQCnnQtB0y",
          fullName: "Marcin Robak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          email: "orion@email.com",
          password:
            "$2b$10$9c33zmC1ywdfd4VYlBjM.OCPqR6xe7K99Kmoqr1ki574KS96rUD8m",
          fullName: "Orion Robak",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          email: "myra@email.com",
          password:
            "$2b$10$xxkO9QQ9WO20ogJFBzomvuE0PJOhyTcRpuGoOcEBsKmg9kOWCdT2q",
          fullName: "Myra van Roon",
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
  },
};
