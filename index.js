require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");

db.connect()
  .then(() => {
    console.log("DB connected");
    server.listen(8080, () => {
      console.log("Server running");
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
