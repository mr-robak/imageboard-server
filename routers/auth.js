const { Router } = require("express");
const { toJWT, toData } = require("../auth/jws");

const router = new Router();

router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send("Please provide valid email and password!");
    } else {
      //const hashedPassword = bcrypt.hashSync(password, 10);
      //   const newUser = await User.create({
      //     email,
      //     password: hashedPassword,
      //     fullName,
      //   });
      //   res.json(newUser);

      // If some email and password are given, we should respond with a JWT, not userId. normally we would check the password and find the correct user in the database
      res.send({
        jwt: toJWT({ userId: 1 }),
      });
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
