const { Router } = require("express");
const Image = require("../models").image;

// variations of import/require
// const Image = require().image
// const { image: Image } = require('models')
// const models = require('models')
// const images = await models.image.findAll()

const router = new Router();

router.get("/", (req, res, next) => {
  // Math.min() here sets the limit for results row, it is 25 if nothing provided, then user imput, but only when < 500, otherwise 500 is used
  const limit = Math.min(req.query.limit || 25, 500);
  const offset = req.query.offset || 0;

  Image.findAndCountAll({ limit, offset })
    .then((result) => res.send({ images: result.rows, total: result.count }))
    .catch((error) => next(error));
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
