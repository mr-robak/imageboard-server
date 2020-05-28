"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn(
        "users",
        "city",
        { type: Sequelize.STRING },
        { transaction: t }
      );
      await queryInterface.addColumn(
        "users",
        "street",
        { type: Sequelize.ANYTHING },
        { transaction: t }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.removeColumn("users", "city", { transaction: t });
      await queryInterface.removeColumn("users", "street", { transaction: t });
    });
  },
};
