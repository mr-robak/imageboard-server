const express = require("express");
const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

const app = express();
port = 4000;

app.use(imageRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is ON at :${port}`);
});
