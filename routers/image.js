const { Router } = require("express");
const Image = require("../models").image;

// variations of import/require
// const Image = require().image
// const { image: Image } = require('models')
// const models = require('models')
// const images = await models.image.findAll()

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.send(images);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const image = await Image.findByPk(id);
    if (!image) {
      res.status(400).send(`No image with an id=${id}`);
    }
    res.send(image);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || title === " ") {
      res.status(400).send("Please provide a title=");
    } else if (!url || url === " ") {
      res.status(400).send("Please provide an url=");
    } else {
      const image = await Image.create(req.body);
      res.json(image);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
