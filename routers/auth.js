const { Router } = require("express");
const bcrypt = require("bcrypt");

const { toJWT, toData } = require("../auth/jws");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please provide valid email and password!");
    } else {
      // 1. find user based on email address. because key in table/model is called email, I can just put {email} here instead of {email: email}, its the same. unlike here f.ex {userEmail: email}, etc
      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(404).send(`No user with ${email} email`);
        // 2. use bcrypt.compareSync to check the recieved password against the stored hash
      } else if (bcrypt.compareSync(password, user.password)) {
        // 3. if the password is correct, return a JWT with the userId of the user (user.id)
        const jwt = toJWT({ userId: user.id });
        res.send({ jwt }); // again here its just {jwt} so new obj = {"jwt": jwt.value}
      } else {
        res.status(401).send("Wrong password");
      }
    }
  } catch (e) {
    next(e);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res
        .status(400)
        .send("Please provide all parameters: email, password, fullName!");
    } else {
      // Here, when handing down the password to the create method we hash it.
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        fullName,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/test-auth", authMiddleware, (req, res) => {
  res.send({
    message: `Thanks for visiting the secret endpoint ${req.user.fullName}.`,
  });
});

module.exports = router;
