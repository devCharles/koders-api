const express = require("express");

const kodersRouter = require("./routers/koders.router");
const authRouter = require("./routers/auth.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/koders", kodersRouter);
app.use("/auth", authRouter);

app.get("/", (request, response) => {
  // response.status(200).send({ message: "hola" });

  response.json({
    message: "api koders v1",
  });
});

module.exports = app;
