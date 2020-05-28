const User = require("../models").user;
const { toData } = require("./jws");

const authMiddleware = async (req, res, next) => {
  // 1. check for authorization header and "split" it.
  // The request looks like this:
  //$ http :4000/test-auth Authorization:"Bearer <token>"
  // so we split "Bearer" from token, yet only if "req.headers.authorization" exists using &&
  const auth =
    req.headers.authorization && req.headers.authorization.split(" ");
  // we check if auth exsists, its first item after split is "Bearer" and HAS something in place where jwt should be (at auth[1])
  if (auth && auth[0] === "Bearer" && auth[1]) {
    // 2. if authorization header is there, auth type is Bearer and we have something at auth[1] we proceed to check the token.
    // Remember to try/catch the call to "toData()".
    try {
      const jwt = auth[1];
      const data = toData(jwt);
      //   console.log("userId at middleware", data.userId);
      // 3. Use the value returned from "toData()" to look for that user in your database with User.findByPk
      const user = await User.findByPk(data.userId);
      if (!user) {
        res.status(404).send("User not found");
      } else {
        // 5. If user is found, set it to `req.user = user` and call next()
        req.user = user;
        next();
      }
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      });
    }
  } else {
    // 4. If any of ( auth && auth[0] === "Bearer" && auth[1])not found,
    // RETURN  a 401 status and the message: 'Please supply some valid
    // credentials and call next();
    res.status(401).send("Please supply some valid credentials");
  }
};

module.exports = authMiddleware;
