const { Router } = require("express");
const Image = require("../models").image;

// variations of import/require
// const Image = require().image
// const { image: Image } = require('models')
// const models = require('models')
// const images = await models.image.findAll()

const router = new Router();

router.get("/images", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    console.log(images);
    res.send(images);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
