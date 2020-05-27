"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "images",
      [
        {
          id: 1,
          title: "alien",
          url:
            "https://www.screengeek.net/wp-content/uploads/2019/08/alien-movie.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "alien queen",
          url:
            "https://vignette.wikia.nocookie.net/avp/images/7/74/Promo07.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "alien drone",
          url:
            "https://vignette.wikia.nocookie.net/avp/images/1/17/Xenomorph_drone_caste.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "hive",
          url:
            "https://vignette.wikia.nocookie.net/avp/images/e/ec/Queen_Hive.PNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "facehugger",
          url:
            "https://www.syfy.com/sites/syfy/files/styles/1240x700_hero/public/2020/04/gettyimages-607392368.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "eggs",
          url:
            "https://vignette.wikia.nocookie.net/avp/images/9/91/Ripley_and_Newt_in_Hive.png",
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
