"use strict";
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define(
    "image",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      url: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  image.associate = function (models) {
    // associations can be defined here
  };
  return image;
};
